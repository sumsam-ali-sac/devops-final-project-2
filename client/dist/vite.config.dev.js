"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vite = require("vite");

var _pluginReactSwc = _interopRequireDefault(require("@vitejs/plugin-react-swc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _vite.defineConfig)(function (_ref) {
  var mode = _ref.mode;
  var env = (0, _vite.loadEnv)(mode, process.cwd());
  var API_URL = "".concat(env.VITE_BE_API_URL || "http://localhost:8080");
  var PORT = "".concat(env.VITE_PORT || "5173");
  return {
    build: {
      outDir: "../api/client_build"
    },
    server: {
      proxy: {
        "/api": {
          target: API_URL,
          changeOrigin: true,
          secure: false
        }
      }
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/setupTests.js",
      reporters: ["default", "junit"],
      outputFile: "test-results.xml"
    },
    plugins: [(0, _pluginReactSwc["default"])()]
  };
});

exports["default"] = _default;