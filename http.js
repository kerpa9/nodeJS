const http = require("node:http");
const { findAvailablePort } = require("./puerto-libre");

const desiredPort = process.env.PORT ?? 3000;
const server = http.createServer((req, res) => {
  console.log("request recibida");
  res.end("hola mundo");
});

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`);
  });
});
