import fs from "fs";
import { Transform } from "stream";

const fileReadStream = fs.createReadStream("log.txt");
const fileWriteStream = fs.createWriteStream("log_write.txt");

const trans = new Transform({
  transform(chuck, _, callback) {
    callback(null, chuck.toString().toUpperCase());
  },
});

fileReadStream.pipe(trans).pipe(fileWriteStream);
