import path from "path";

// parse file path in order to use it as an object

const windows_path = path.parse("C\\Users\\User\\Desktop\\password.txt");
console.log("windows path", windows_path);

const linux_path = path.parse("/home/user/password.txt");
console.log("linux path", linux_path);

// build file path using format, object
let dir = path.format({
  dir: "C:\\Users\\User\\Desktop",
  base: "password.txt",
  ext: ".txt",
  name: "password",
});
console.log("windows path", dir);
console.log(path.parse(dir));
