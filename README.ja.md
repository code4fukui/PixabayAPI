# PixabayAPI

Pixabayの画像を検索・ダウンロードできるツールです。

## デモ
[使用例](https://code4fukui.github.io/PixabayAPI/)

## 機能
- キーワード検索
- 水平/垂直方向の画像検索
- 画像のダウンロードと保存
- 結果をHTMLページで表示

## 必要環境
- [Deno](https://deno.land/) (JavaScript/TypeScriptランタイム)

## 使い方
1. [Pixabayのアカウントを作成](https://pixabay.com/accounts/register/)し、APIキーを取得する
2. `apikey.txt`ファイルにAPIキーを記載する
3. 以下のコマンドでプログラムを実行する

```bash
deno run -A geth.js [キーワード]
```

実行後、`data/`ディレクトリに検索結果が保存されます。

## データ・API
- [Pixabay API](https://pixabay.com/api/docs/)を利用しています

## ライセンス
MIT License