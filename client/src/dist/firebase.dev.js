"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;

var _app = require("firebase/app");

var firebaseConfig = {
  apiKey: "AIzaSyDcgASFGHV4-VEMoQvCxZgMvdl5zf5uLtI",
  authDomain: "cogniassess-auth.firebaseapp.com",
  projectId: "cogniassess-auth",
  storageBucket: "cogniassess-auth.appspot.com",
  messagingSenderId: "331870902098",
  appId: "1:331870902098:web:48b7c547afc672dc984c8b"
};
var app = (0, _app.initializeApp)(firebaseConfig);
exports.app = app;