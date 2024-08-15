const http = require("node:http");
const fs = require("node:fs");
const desiredPort = process.env.PORT ?? 3000;
const processRequest = (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  if (req.url === "/") {
    res.statusCode = 200;
    res.end("  <h1><b>Bienvenido a mi página de inicio</b></h1>");
  } else if (req.url === "/imagen") {
    fs.readFile("./imagen.jpg", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("<h1>500 Internal error</h1>");
      } else {
        res.setHeader("Content-Type", "image/jpg");

        res.end(data);
      }
    });
  } else if (req.url === "/contacto") {
    res.statusCode = 200;
    res.end("<h2>Contacto</h2>");
  } else {
    res.statusCode = 404;
    res.end("<h2>404</h2>");
  }
};
const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`);
});
