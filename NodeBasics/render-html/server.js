const http = require("http");
const fs = require("fs");

const onRequest = (request, response) => {
  response.writeHeader(200, { "Content-Type": "text/html" });
  fs.readFile("./index.html", null, function (error, data) {
    if (error) {
      response.writeHeader(404);
      response.write("File not found");
    } else {
      response.write(data);
    }
    response.end();
  });
};

http.createServer(onRequest).listen(5000);
