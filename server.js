var http = require("http");
var port = process.env.PORT || 6002;
var app = require("./app");

var server = http.createServer(app);

server.listen(port);
console.log(`Listening at port ` + port);
