"use strict";

var _express = _interopRequireDefault(require("express"));

var _http = require("http");

var _dotenv = require("dotenv");

var _middleware = require("./config/middleware.js");

var _connectDB = require("./lib/connectDB.js");

var _routes = require("./config/routes.js");

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _dotenv.config)();
(0, _connectDB.connectDB)();
var app = (0, _express["default"])();
(0, _middleware.setupMiddlewares)(app);
(0, _routes.setupRoutes)(app);
app.use(_express["default"]["static"](_path["default"].join(__dirname, "client_build")));
app.get("*", function (req, res) {
  res.sendFile(_path["default"].resolve(__dirname, "client_build", "index.html"));
});
var server = (0, _http.createServer)(app);
var PORT = process.env.PORT || 3000;
server.listen(PORT, function () {
  console.log("Server is listening on http://localhost:".concat(PORT));
});