import { fetchImagesGood } from "./Pixabay.js";
import { fetchBin } from "https://js.sabae.cc/fetchBin.js";

export const download = async (opt, path) => {
  path = path || "data/";
  try {
    await Deno.remove(path, { recursive: true });
  } catch (e) {
  }
  await Deno.mkdir(path);

  const imgs = await fetchImagesGood(opt);
  //console.log(imgs);
  await Deno.writeTextFile(path + "images.json", JSON.stringify(imgs, null, 2));
  const list = [];
  for (const img of imgs.hits) {
    console.log(img);
    const fn = img.previewURL.substring(img.previewURL.lastIndexOf("/") + 1);
    //const bin = new Uint8Array(await (await fetch(img.largeImageURL)).arrayBuffer());
    const bin = await fetchBin(img.largeImageURL);
    await Deno.writeFile(path + fn, bin);
    await Deno.writeTextFile(path + fn + ".json", JSON.stringify(img, null, 2));
    list.push({ fn, url: img.pageURL });
  }
  const title = opt.q + " from Pixabay";
  await writeHTML(path + "images.html", title, imgs);
};

export const writeHTML = async (fn, title, imgs) => {
  const list = [];
  for (const img of imgs.hits) {
    console.log(img);
    const fn = img.previewURL.substring(img.previewURL.lastIndexOf("/") + 1);
    list.push({ fn, url: img.pageURL });
  }
  // make HTML
  const htmlimg = list.map(f => `<a href=${f.url}><img src=${f.fn} style="width:22vw"></a>`).join("\n");
  const html = [
    '<!DOCTYPE html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width">',
    '<style>img { vertical-align: middle; }</style>',
    `<title>${title}</title>`,
    '</head><body style="text-align:center">',
    `<h1>${title}</h1>`,
    htmlimg,
    '<hr>',
    'DATA: <a href=https://pixabay.com/ja/service/license/>Pixabay License</a> by <a href=https://pixabay.com/>Pixabay</a><br>',
    'App: <a href=https://github.com/code4fukui/PixabayAPI/>PixabayAPI by Code for FUKUI</a><br>',
    '</body></html>',
  ].join("\n");
  await Deno.writeTextFile(fn, html)
};
