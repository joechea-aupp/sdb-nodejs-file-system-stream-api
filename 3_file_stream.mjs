import fs from "fs";

let read_stream = fs.createReadStream("log.txt");

read_stream.on("data", (data) => {
  console.log(data.toString());
});

let write_stream = fs.createWriteStream("log_write.txt");
write_stream.write("Hello World");
