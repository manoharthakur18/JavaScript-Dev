const http = require("http");
const app = require("./app");

http.createServer(app.handleRequest).listen(5000);
