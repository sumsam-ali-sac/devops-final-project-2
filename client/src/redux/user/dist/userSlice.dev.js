"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.clearError = exports.logoutUser = exports.signInWithGoogle = exports.signInUser = exports.signUpUser = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _auth = require("firebase/auth");

var _firebase = require("../../firebase");

var initialState = {
  user: null,
  isLoading: false,
  error: null
}; // Asynchronous thunk for signing up a user

var signUpUser = (0, _toolkit.createAsyncThunk)("user/signUp", function _callee(userData, _ref) {
  var rejectWithValue, response, data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          rejectWithValue = _ref.rejectWithValue;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch("/api/auth/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
          }));

        case 4:
          response = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context.sent;

          if (response.ok) {
            _context.next = 10;
            break;
          }

          throw new Error(data.message || "Unable to sign up");

        case 10:
          return _context.abrupt("return", data);

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](1);
          return _context.abrupt("return", rejectWithValue(_context.t0.message));

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 13]]);
}); // Asynchronous thunk for signing in a user

exports.signUpUser = signUpUser;
var signInUser = (0, _toolkit.createAsyncThunk)("user/signIn", function _callee2(credentials, _ref2) {
  var rejectWithValue, response, data;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          rejectWithValue = _ref2.rejectWithValue;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(fetch("/api/auth/signin", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
          }));

        case 4:
          response = _context2.sent;
          _context2.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context2.sent;

          if (response.ok) {
            _context2.next = 10;
            break;
          }

          throw new Error(data.message || "Unable to sign in");

        case 10:
          return _context2.abrupt("return", data.user);

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](1);
          return _context2.abrupt("return", rejectWithValue(_context2.t0.message));

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 13]]);
}); // Asynchronous thunk for Google sign-in

exports.signInUser = signInUser;
var signInWithGoogle = (0, _toolkit.createAsyncThunk)("user/signInWithGoogle", function _callee3(_, _ref3) {
  var rejectWithValue, dispatch, provider, auth, result, user, userData, response, _data, data;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          rejectWithValue = _ref3.rejectWithValue, dispatch = _ref3.dispatch;
          _context3.prev = 1;
          provider = new _auth.GoogleAuthProvider();
          auth = (0, _auth.getAuth)(_firebase.app);
          _context3.next = 6;
          return regeneratorRuntime.awrap((0, _auth.signInWithPopup)(auth, provider));

        case 6:
          result = _context3.sent;
          user = result.user;
          userData = {
            username: user.displayName,
            email: user.email,
            avatar: user.photoURL
          };
          _context3.next = 11;
          return regeneratorRuntime.awrap(fetch("/api/auth/google", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
          }));

        case 11:
          response = _context3.sent;

          if (response.ok) {
            _context3.next = 17;
            break;
          }

          _context3.next = 15;
          return regeneratorRuntime.awrap(response.json());

        case 15:
          _data = _context3.sent;
          throw new Error(_data.message || "Failed to process user data on the server");

        case 17:
          _context3.next = 19;
          return regeneratorRuntime.awrap(response.json());

        case 19:
          data = _context3.sent;
          return _context3.abrupt("return", data.user);

        case 23:
          _context3.prev = 23;
          _context3.t0 = _context3["catch"](1);

          if (_context3.t0.code === "auth/popup-closed-by-user") {
            dispatch(setLoading(false)); // Adjust according to your actual action to set loading state
          }

          return _context3.abrupt("return", rejectWithValue(_context3.t0.message));

        case 27:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 23]]);
}); // Slice definition

exports.signInWithGoogle = signInWithGoogle;
var userSlice = (0, _toolkit.createSlice)({
  name: "user",
  initialState: initialState,
  reducers: {
    logoutUser: function logoutUser(state) {
      state.user = null;
      state.isLoading = false;
      state.error = null;
    },
    clearError: function clearError(state) {
      state.error = null;
    }
  },
  extraReducers: function extraReducers(builder) {
    builder.addCase(signUpUser.pending, function (state) {
      state.isLoading = true;
      state.error = null;
    }).addCase(signUpUser.fulfilled, function (state, action) {
      state.isLoading = false;
      state.user = action.payload;
    }).addCase(signUpUser.rejected, function (state, action) {
      state.isLoading = false;
      state.error = action.payload;
    }).addCase(signInUser.pending, function (state) {
      state.isLoading = true;
      state.error = null;
    }).addCase(signInUser.fulfilled, function (state, action) {
      state.isLoading = false;
      state.user = action.payload;
    }).addCase(signInUser.rejected, function (state, action) {
      state.isLoading = false;
      state.error = action.payload;
    }).addCase(signInWithGoogle.pending, function (state) {
      state.isLoading = false;
      state.error = null;
    }).addCase(signInWithGoogle.fulfilled, function (state, action) {
      console.log(action.payload);
      state.isLoading = false;
      state.user = action.payload;
    }).addCase(signInWithGoogle.rejected, function (state, action) {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});
var _userSlice$actions = userSlice.actions,
    logoutUser = _userSlice$actions.logoutUser,
    clearError = _userSlice$actions.clearError;
exports.clearError = clearError;
exports.logoutUser = logoutUser;
var _default = userSlice.reducer;
exports["default"] = _default;