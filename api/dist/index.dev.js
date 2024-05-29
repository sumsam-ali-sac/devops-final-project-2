"use strict";

var _express = _interopRequireDefault(require("express"));

var _http = require("http");

var _dotenv = require("dotenv");

var _middleware = require("./config/middleware.js");

var _connectDB = require("./lib/connectDB.js");

var _routes = require("./config/routes.js");

var _errorHandler = require("./middleware/errorHandler.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _dotenv.config)();
(0, _connectDB.connectDB)();
var app = (0, _express["default"])();
(0, _middleware.setupMiddlewares)(app);
(0, _routes.setupRoutes)(app);
app.use(_errorHandler.errorHandler);
var server = (0, _http.createServer)(app);
var PORT = process.env.PORT || 8080;
server.listen(PORT, function () {
  console.log("Server is listening on https://helphivebot.azurewebsites.net/:".concat(PORT));
});