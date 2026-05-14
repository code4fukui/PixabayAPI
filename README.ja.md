# PixabayAPI

[Pixabay](https://pixabay.com/) APIを使用して画像を検索・ダウンロードします。

## 機能
- キーワードによるPixabay上の画像検索
- プレビュー画像に加え、フルサイズ画像のダウンロード
- 画像のメタデータをJSONファイルとして保存
- サムネイルからフルサイズ画像へのリンクを含むHTMLページの生成

## 必要条件
- [Deno](https://deno.land/) ランタイム

## 使い方
1. [Pixabay APIドキュメント](https://pixabay.com/api/docs/)からAPIキーを取得し、プロジェクトファイルと同じディレクトリに `apikey.txt` という名前のファイルで保存します。
2. 以下のコマンドを実行して、画像を検索・ダウンロードします。

   ```bash
   deno run -A geth.js [keyword]
   ```

   `[keyword]` を検索したいキーワードに置き換えてください。

3. ダウンロードされた画像とそのメタデータは `data/` ディレクトリに保存されます。

## データ / API
本プロジェクトでは、画像の検索およびダウンロードに[Pixabay API](https://pixabay.com/api/docs/)を使用しています。

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
