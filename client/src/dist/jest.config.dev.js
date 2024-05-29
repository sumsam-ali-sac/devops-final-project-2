"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  }
};
exports["default"] = _default;