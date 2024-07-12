# URL Parser

URLのパラメータを解析し、操作するためのReactアプリケーションです。

## 特徴

- URLの解析とパラメータの表示
- 新しいパラメータの追加
- 既存のパラメータの編集
- パラメータの削除
- Tailwind CSSを使用したレスポンシブデザイン

## 前提条件

- [bun](https://bun.sh/) - 高速なオールインワンJavaScriptランタイム

## インストール

1. リポジトリをクローン

```bash
git clone https://github.com/yourusername/url-parser.git
cd url-parser
```

2. bunを使用して依存関係をインストール

```bash
bun install
```

## アプリケーションの実行

1. 開発サーバーを起動

```bash
bun run dev
```

2. ブラウザでhttp://localhost:3000にアクセスしてください。


## 使用方法

### URLの解析

1. 入力フィールドにURLを入力します。
2. アプリケーションが自動的にURLを解析し、そのパラメータを表示します。

### パラメータの追加

1. "Add New Parameter"セクションの入力フィールドにパラメータのキーと値を入力します。
2. "Add"ボタンをクリックしてパラメータを追加します。

### パラメータの編集

1. 入力フィールドでパラメータの値を直接変更します。
2. URLとパラメータが自動的に更新されます。

### パラメータの削除

1. 削除したいパラメータの隣にある"Remove"ボタンをクリックします。
2. パラメータがURLと表示から削除されます。

## 使用技術

- [React](https://reactjs.org/) - ユーザーインターフェースを構築するためのJavaScriptライブラリ
- [Next.js](https://nextjs.org/) - プロダクション向けのReactフレームワーク
- [Tailwind CSS](https://tailwindcss.com/) - ユーティリティファーストのCSSフレームワーク
- [TypeScript](https://www.typescriptlang.org/) - 任意のスケールに対応する型付きJavaScript
- [Bun](https://bun.sh/) - 高速なオールインワンJavaScriptランタイム
