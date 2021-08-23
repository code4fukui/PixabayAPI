import { download } from "./download.js";

const keyword = Deno.args[0] || "";
const opt = { q: keyword };
await download(opt);
