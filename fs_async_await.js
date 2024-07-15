const { readFile } = require("node:fs/promises");

(async () => {
  console.log("Leyendo primer archivo...");

  const text = await readFile("./archivo.txt", "utf-8").then((text) => {
    console.log("Primer archivo:", text);
  });

  console.log("Mientras...");

  console.log("Leyendo segundo archivo...");

  const secondText = await readFile("./archivo2.txt", "utf-8").then((text) => {
    console.log("Segundo archivo:", text);
  });
})();
