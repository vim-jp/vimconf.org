# vimconf

## Getting involved

Join [vim-jp slack](https://vim-jp.org/docs/chat.html) instead, or contact [us](https://twitter.com/vim_jp).

(We stopped using [![Gitter](https://badges.gitter.im/vim-jp/vimconf.svg)](https://gitter.im/vim-jp/vimconf?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge). )

## How to serve in your machine

### Pre requirements

* Docker
* (OPTION) Python 3: to preview with local HTTP server

### Build

The following command will build your site in the \_site/ directory:

```console
$ ./_scripts/docker_jekyll jekyll build
```

You can also specify options such as incremental options.

```console
$ ./_scripts/docker_jekyll jekyll build -I
```

### Serve

You can run `jekyll serve` with the following command.

```console
$ ./_scripts/docker_jekyll_serve
```

It uses port 4000 to serve the contents.
Open http://127.0.0.1:4000 with your browser.

This command accepts options as you know.
To use watch and incremental builds:

```console
$ ./_scripts/docker_jekyll_serve -wI
```

Auto-regeneration may not work on some Windows versions.
In that case, it might be easier to serve it in Python
and generate it manually in the "Build" step.

If you just want to serve without watching or building, you may do as follows.

```console
$ ./_scripts/docker_jekyll_serve --skip-initial-build --no-watch
```

#### Serve with Python

You can run Python local HTTP server with the following command.

```console
$ ./_scripts/python_http_server
```

It uses ports 8000 to serve the contents.
Open http://127.0.0.1:8000 with your browser.
