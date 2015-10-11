VimConf2015 Webサイト作成に関する issue はこちら https://github.com/vim-jp/vimconf/issues/67

---

# VimConf2015

このディレクトリは VimConf2015 のためのものです。
ディレクトリ配下のファイルは https://vimconf.vim-jp.org/2015/ に公開されます。

## 仕組み

[GitHub Pages](https://pages.github.com) が使われています。
特に静的ファイル生成のために[Jekyll](https://help.github.com/articles/using-jekyll-with-pages/) を使って以下のことを行っています。

* `_data/2015` 配下のYAMLファイルからページの生成及び `info.json` ファイルの生成 [[Data Files](http://jekyllrb.com/docs/datafiles/)]
* `_layout/2015/default.html` を使ってレイアウトを定義
* 各ページの先頭の[YAML Front Matter](http://jekyllrb.com/docs/frontmatter/) を使ってデザインを統一
* Markdown ファイルをHTMLにコンバート (** Markdown はデザインするには不向きなのでHTMLで書き直した方が良いかも**)
* テンプレートエンジンとして[Liquid](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers) を使用 [[Liquid for Designers](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers)]


## Contributing

1. Fork vim-jp/vimconf to yourname/vimconf
2. Push to your gh-pages branch - git push origin gh-pages
3. Check your site - https://yourname.github.io/vimconf/2015
4. Create a Pull Request with a link to your site
5. That's it!
