# PixabayAPI

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

Use the [Pixabay](https://pixabay.com/) API to search and download images.

## Features
- Search for images on Pixabay by keyword
- Download the full-sized images in addition to the preview images
- Save the image metadata as JSON files
- Generate an HTML page with thumbnails linking to the full-size images

## Requirements
- [Deno](https://deno.land/) runtime

## Usage
1. Get an API key from the [Pixabay API documentation](https://pixabay.com/api/docs/) and save it in a file named `apikey.txt` in the same directory as the project files.
2. Run the following command to search for and download images:

   ```bash
   deno run -A geth.js [keyword]
   ```

   Replace `[keyword]` with the search term you want to use.

3. The downloaded images and their metadata will be saved in the `data/` directory.

## Data / API
This project uses the [Pixabay API](https://pixabay.com/api/docs/) to search for and download images.

## License
MIT License — see [LICENSE](LICENSE).