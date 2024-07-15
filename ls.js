// const fs = require("node:fs");
// fs.readdir(".", (err, files) => {
//   if (err) {
//     console.error("Error", err);
//     return;
//   }
//   files.forEach((file) => {
//     console.log(file);
//   });
// });

const fs = require("node:fs/promises");
fs.readdir(".")
  .then((files) => {
    files.forEach((file) => {
      console.log(file);
    });
  })
  .catch((err) => {
    if (err) {
      console.error("Error", err);
      return;
    }
  });
