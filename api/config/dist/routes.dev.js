"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupRoutes = setupRoutes;

var _authRoute = _interopRequireDefault(require("../routes/auth.route.js"));

var _userRoute = _interopRequireDefault(require("../routes/user.route.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function setupRoutes(app) {
  app.use("/api/auth", _authRoute["default"]);
  app.use("/api/user", _userRoute["default"]);
}