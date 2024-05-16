import * as stringify from "csv-stringify";
import fs from "fs";

const write = fs.createWriteStream("log3.csv");
const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const columns = ["num1", "num2", "num3"];

const stringifier = stringify.stringify({ header: true, columns: columns });

for (let row of data) {
  stringifier.write(row);
}

stringifier.pipe(write);
