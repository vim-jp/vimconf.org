package main

import (
	"flag"
	"fmt"
	"io"
	"log"
	"net/url"
	"os"
	"path"
	"path/filepath"
	"strings"
	"text/template"
)

func toURL(name string) (*url.URL, error) {
	list := strings.Split(name, string(os.PathSeparator))
	if len(list) < 2 {
		return nil, fmt.Errorf("invalid path, need a dir and a file at least: %s", name)
	}
	dir, fname := list[0], list[len(list)-1]
	u := url.URL{
		Scheme: "https",
		Host:   "slides.vimconf.org",
		Path:   path.Join(dir, fname),
	}
	return &u, nil
}

var mdTmpl = template.Must(template.New("md").Parse(`---
layout: redirected
sitemap: false
redirect_to: {{.URL}}
---
`))

func writeMD(w io.Writer, u *url.URL) error {
	return mdTmpl.Execute(w, map[string]interface{}{
		"URL": u,
	})
}

func replacePDF(name string) error {
	name = filepath.Clean(name)
	fi, err := os.Stat(name)
	if err != nil {
		return err
	}
	if !fi.Mode().IsRegular() {
		log.Printf("%s is not a file, skipped")
		return nil
	}
	u, err := toURL(name)
	if err != nil {
		return err
	}
	if err := os.Remove(name); err != nil {
		return err
	}
	if err := os.Mkdir(name, 0777); err != nil {
		return err
	}
	mdname := filepath.Join(name, "index.md")
	f, err := os.Create(mdname)
	if err != nil {
		return err
	}
	defer f.Close()
	return writeMD(f, u)
}

func main() {
	flag.Parse()
	if flag.NArg() == 0 {
		log.Fatal("require ore more PDF files")
	}
	for _, f := range flag.Args() {
		err := replacePDF(f)
		if err != nil {
			log.Fatalf("failed to replace PDF %s: %s", f, err)
		}
	}
}
