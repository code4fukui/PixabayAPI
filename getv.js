import { download } from "./download.js";

const keyword = Deno.args[0] || "";
// https://pixabay.com/api/docs/
const opt = { q: keyword, orientation: "vertical", image_type: "photo" }; // "illustration"
await download(opt);
