import * as url from "url";

// import.meta.url is the URL of the current module
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
console.log(__dirname);
