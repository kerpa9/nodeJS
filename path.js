const path = require("node:path");

const filePath = path.join("content", "subfolder", "test.txt");

const base = path.basename("/tmp/test.txt", ".txt");

console.log(path.sep);
console.log(filePath);
console.log(base);
