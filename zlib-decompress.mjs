import fs from "fs"
import zlib from "zlib"

const source = fs.readFileSync("zlib-compress.mjs.txt")
console.log(source.toString());

const result = zlib.unzipSync(source);
console.log(result.toString());