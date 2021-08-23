const api = async(opt) => {
  if (!opt) {
    opt = {};
  }
  if (!opt.key) {
    try {
      opt.key = (await Deno.readTextFile("apikey.txt")).trim();
    } catch (e) {
    }
    if (!opt.key) {
      throw new Error("please set key as apikey or put apikey.txt in current directory!");
    }
  }
  const endpoint = "https://pixabay.com/api/";
  const param = Object.keys(opt).map(o => o + "=" + encodeURIComponent(opt[o])).join("&");
  const url = endpoint + "?" + param;
  const res = await (await fetch(url)).json();
  return res;
};

const fetchImagesGood = async (opt) => {
  opt = opt || {};
  opt.editors_choice = true;
  opt.safesearch = true;
  return await api(opt);
};

const fetchImages = async () => {
  return await api();
};

export { fetchImagesGood, fetchImages };
