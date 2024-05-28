"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUser = void 0;

var _userModel = _interopRequireDefault(require("../models/user.model.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var deleteUser = function deleteUser(req, res) {
  var email, user;
  return regeneratorRuntime.async(function deleteUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          email = req.body.email;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_userModel["default"].findOneAndDelete({
            email: email
          }));

        case 4:
          user = _context.sent;

          if (user) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.status(404).json({
            message: "User not found"
          }));

        case 7:
          res.status(200).json({
            message: "User deleted successfully"
          });
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](1);
          res.status(500).json({
            message: "Server error",
            error: _context.t0
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 10]]);
};

exports.deleteUser = deleteUser;