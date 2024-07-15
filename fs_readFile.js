const fs = require("node:fs");

//Sincronía

// const text = fs.readFileSync("./archivo.txt", "utf-8");

// console.log(text);

//Asincronía Callback

console.log("Leyendo primer archivo...");

const text = fs.readFile("./archivo.txt", "utf-8", (err, text) => {
  console.log("Primer texto:", text);
});

console.log("Mientras...");

console.log("Leyendo segundo archivo...");

fs.readFile("./archivo2.txt", "utf-8", (err, text) => {
  console.log("Segundo texto:", text);
});
