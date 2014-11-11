<!--!
{
  'font': 'Migu_1M:h37:cSHIFTJIS',
  'colorscheme': 'white',
}
-->

# Test for Vim script!

2014/11/08 VimConf 2014
         thinca

## 自己紹介

- thinca
  - Twitter: @thinca
  - GitHub: thinca
- マンボウの人

## 本日のテーマ

## テスト！
<!--!
{
  'font': 'Migu_1M:h110:cSHIFTJIS',
}
-->

### テスト、書いてますか?

- 高まるテスト需要
- TDD も一般的になってきた
- テスティングフレームワークも
  充実

### テスティングフレームワーク

### 巷にはたくさんある

- Ruby - RSpec/test-unit
- Java - JUnit/TestNG
- Python - testunit/doctest
- JavaScript - QUnit/mocha
- Haskell - doctest/hspec
- C++ - CppUnit/Google Test

###
Vim script でも
テストしたい！

###
Vim script に
テスティング
フレームワークはあるの?

### あります！

### 既存のテスティングフレームワーク達 (1/3)

- UT  (Luc Hermitte)
- VimTap  (Meikel Brandmeyer)
- runVimTests  (Ingo Karkat)
- spec.vim  (Tom Link)
- tAssert  (Tom Link)

### 既存のテスティングフレームワーク達 (2/3)

- simpletap.vim  (tyru)
- vader.vim  (junegunn)
- vesting  (Shougo)
- vimUnit  (Staale Flock)
- vroom  (Google)

### 既存のテスティングフレームワーク達 (3/3)

- vspec  (Kana Natsuno)
- owl.vim  (osyo-manga)
- vimtest  (kannokannno)
- themis.vim  (thinca)
- ほかにもたくさん！

### …多すぎる

### どうしてこうなった

- みんなオレオレフレームワークを
  作っているので乱立している

- デファクトスタンダードと
  呼べるものはない

### どれを選べばいいの?

- 大きく分けて2つに分けられる
  - Vim 内から実行するもの
  - シェルから実行するもの

- シェルから実行できるものは少ない

### どれを選べばいいの?

- Vim 内から実行するもの
  → マルチプラットフォーム

- シェルから実行するもの
  → CI するならシェル実行は必須
  → Windows 向けコマンドは
     まず用意されていない

###

- CI したいのでシェルから
  実行したい
- Windows でもテストしたい

- この両者を満たす物はない…

### ないなら作ればいいじゃない！

###
<!--!
{
  'font': 'Migu_1M:h60:cSHIFTJIS',
}
-->

＿人人人人人人＿
＞ themis.vim ＜
￣^Y^Y^Y^Y^Y^Y￣

## themis.vim について

### themis.vim の特徴

- シェルから実行可能
- シンプルなテストルール
- 複数のテストスタイル
- 様々な結果フォーマット

#### シェルから実行可能

- themis コマンドを提供
- 適当にパスを通して使う
- Windows/Linux 両対応

#### シンプルなテストルール

- 関数1つでテスト1つ
- 例外を投げたら失敗、
  それ以外は成功
- 例外を投げるための
  ヘルパーがある

#### 複数のテストスタイル

- 書き方はひとつ！じゃない！！
- .vim と
  .vimspec(独自DSL) に対応
- helper も好きなものを使える

#### 様々な結果フォーマット

- tap/dot/spec
- 今後追加予定

## デモ

## CI

- テストを書いたら
  実行しないと意味がない
- Vim script でも CI したい！

### Travis-CI

```yaml
before_script:
  - git clone https://github.com/thinca/vim-themis /tmp/vim-themis
script:
  - /tmp/vim-themis/bin/themis
```

### AppVeyor

- Windows でもテストできる
- 詳細はブログで
  - http://goo.gl/aZf8b6

## 今後

- vimspec のスコープをいい感じにしたり
- エラー見やすくしたり
- もっと helper 増やしたり
- もっと reporter 増やしたり
- がんばる

## まとめ

- Vim script でもテストは書ける

- CI もできる

- テスト書こう！

## おしまい