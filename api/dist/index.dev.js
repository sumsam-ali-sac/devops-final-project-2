"use strict";

var _express = _interopRequireDefault(require("express"));

var _http = require("http");

var _dotenv = require("dotenv");

var _middleware = require("./config/middleware.js");

var _connectDB = require("./lib/connectDB.js");

var _routes = require("./config/routes.js");

var _errorHandler = require("./middleware/errorHandler.js");

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _dotenv.config)();
(0, _connectDB.connectDB)();
var app = (0, _express["default"])();
(0, _middleware.setupMiddlewares)(app);
(0, _routes.setupRoutes)(app); // Path to the static files directory

var distPath = _path["default"].join(__dirname, "../client/dist"); // Serve static files from the distPath directory


app.use(_express["default"]["static"](distPath)); // Serve the main index.html file for any route not handled by other routes

app.get("/*", function (req, res) {
  res.sendFile("index.html", {
    root: distPath
  });
});
app.use(_errorHandler.errorHandler);
var server = (0, _http.createServer)(app);
var PORT = process.env.PORT || 8080;
server.listen(PORT, function () {
  console.log("Server is listening on https://helphivebot.azurewebsites.net:".concat(PORT));
});