const url = require("url");
const fs = require("fs");

function renderHtml(path, response) {
  fs.readFile(path, null, function (error, data) {
    if (error) {
      response.writeHeader(404);
      response.write("File not found");
    } else {
      response.write(data);
    }
    response.end();
  });
}

module.exports = {
  handleRequest: function (reqest, response) {
    response.writeHead(200, { "Content-Type": "text/html" });

    var path = url.parse(reqest.url).pathname;
    switch (path) {
      case "/":
        renderHtml("./index.html", response);
        break;
      case "/login":
        renderHtml("./login.html", response);
        break;
      default:
        response.writeHead(404);
        response.write("Route not defined");
        response.end();
    }
  },
};
