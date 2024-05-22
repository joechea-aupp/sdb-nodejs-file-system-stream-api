// import * as url from "url";
const path = require("path");

// import.meta.url is the URL of the current module
// const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
// console.log(__dirname);
file_path = path.join(__dirname, "index_replacement.js");
console.log(file_path);
