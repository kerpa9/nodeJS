const http = require("node:http");

const dittoJSON = require("./pokemon/ditto.json");

const processRequest = (req, res) => {
  const { method, url } = req;

  switch (method) {
    case "GET":
      switch (url) {
        case "/pokemon/ditto":
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          return res.end(JSON.stringify(dittoJSON));

        default:
          res.statusCode = 400;
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          return res.end("<h1>404</h1>");
      }

    case "POST":
      switch (url) {
        case "/pokemon":
          let body = "";

          //   Escuchar el evento data, es decir la información que se esta pasando por el cuerpo

          req.on("data", (chunk) => {
            body += chunk.toString();
          });
      }

    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      return res.end("404 Not found");
  }
};

const server = http.createServer(processRequest);

server.listen(3100, () => {});
