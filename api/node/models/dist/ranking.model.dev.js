"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var rankingSchema = new Schema({
  userID: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  rankScore: {
    type: Number,
    required: true,
    "default": 0
  }
});

var Ranking = _mongoose["default"].model("Ranking", rankingSchema);

var _default = Ranking;
exports["default"] = _default;