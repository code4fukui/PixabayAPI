# PixabayAPI

Pixabayの画像を検索し、ダウンロードできるツールです。

## 機能
- キーワードで画像を検索
- 画像のプレビューと高解像度画像をダウンロード
- 画像のメタデータをJSONファイルで保存
- サムネイル付きのHTMLページを生成

## 必要環境
- [Deno](https://deno.land/) ランタイム

## 使い方
1. [Pixabayのアカウントを作成](https://pixabay.com/accounts/register/)し、APIキーを取得する
2. `apikey.txt`ファイルにAPIキーを記載する
3. 以下のコマンドを実行する

```bash
deno run -A geth.js [キーワード]
```

検索結果は`data/`ディレクトリに保存されます。

## データ・API
- [Pixabay API](https://pixabay.com/api/docs/)を使用しています

## ライセンス
MIT License