"use strict";

var _require = require("selenium-webdriver"),
    Builder = _require.Builder,
    By = _require.By,
    until = _require.until;

var firefox = require("selenium-webdriver/firefox");

var axios = require("axios");

var driver;
var baseApiUrl = "http://localhost:8080";
var baseUrl = "http://localhost:5173";
var firefoxPath = "/usr/local/bin/firefox";
var timestamp = Date.now();
var testUsername = "testuser_".concat(timestamp);
var testEmail = "test_".concat(timestamp, "@example.com");
var testPassword = "Sumsam.Ali.189";
beforeAll(function _callee() {
  var options;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          options = new firefox.Options();
          options.setBinary(firefoxPath);
          options.addArguments("-headless");
          _context.next = 5;
          return regeneratorRuntime.awrap(new Builder().forBrowser("firefox").setFirefoxOptions(options).build());

        case 5:
          driver = _context.sent;

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
});
afterAll(function _callee2() {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!driver) {
            _context2.next = 3;
            break;
          }

          _context2.next = 3;
          return regeneratorRuntime.awrap(driver.quit());

        case 3:
          _context2.next = 5;
          return regeneratorRuntime.awrap(deleteUser(testEmail));

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
});

function deleteUser(email) {
  var response;
  return regeneratorRuntime.async(function deleteUser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(axios["delete"]("/api/user/delete", {
            data: {
              email: email
            }
          }));

        case 3:
          response = _context3.sent;
          console.log("User deleted successfully", response.data);
          _context3.next = 10;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.error("Error deleting user", _context3.t0);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

test("loads signup page", function _callee3() {
  var usernameInput, emailInput, passwordInput, confirmPasswordInput;
  return regeneratorRuntime.async(function _callee3$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(driver.get("".concat(baseUrl, "/sign-up")));

        case 2:
          _context4.next = 4;
          return regeneratorRuntime.awrap(driver.findElement(By.id("username")));

        case 4:
          usernameInput = _context4.sent;
          expect(usernameInput).toBeTruthy();
          _context4.next = 8;
          return regeneratorRuntime.awrap(driver.findElement(By.id("email")));

        case 8:
          emailInput = _context4.sent;
          expect(emailInput).toBeTruthy();
          _context4.next = 12;
          return regeneratorRuntime.awrap(driver.findElement(By.id("password")));

        case 12:
          passwordInput = _context4.sent;
          expect(passwordInput).toBeTruthy();
          _context4.next = 16;
          return regeneratorRuntime.awrap(driver.findElement(By.id("confirmPassword")));

        case 16:
          confirmPasswordInput = _context4.sent;
          expect(confirmPasswordInput).toBeTruthy();

        case 18:
        case "end":
          return _context4.stop();
      }
    }
  });
});
test("signup with valid credentials", function _callee4() {
  return regeneratorRuntime.async(function _callee4$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(driver.get("".concat(baseUrl, "/sign-up")));

        case 2:
          _context5.next = 4;
          return regeneratorRuntime.awrap(driver.findElement(By.id("username")).sendKeys(testUsername));

        case 4:
          _context5.next = 6;
          return regeneratorRuntime.awrap(driver.findElement(By.id("email")).sendKeys(testEmail));

        case 6:
          _context5.next = 8;
          return regeneratorRuntime.awrap(driver.findElement(By.id("password")).sendKeys(testPassword));

        case 8:
          _context5.next = 10;
          return regeneratorRuntime.awrap(driver.findElement(By.id("confirmPassword")).sendKeys(testPassword));

        case 10:
          _context5.next = 12;
          return regeneratorRuntime.awrap(driver.findElement(By.css('button[type="submit"]')).click());

        case 12:
          _context5.next = 14;
          return regeneratorRuntime.awrap(driver.wait(until.urlIs("".concat(baseUrl, "/sign-in")), 20000));

        case 14:
          _context5.t0 = expect;
          _context5.next = 17;
          return regeneratorRuntime.awrap(driver.getCurrentUrl());

        case 17:
          _context5.t1 = _context5.sent;
          _context5.t2 = "".concat(baseUrl, "/sign-in");
          (0, _context5.t0)(_context5.t1).toBe(_context5.t2);

        case 20:
        case "end":
          return _context5.stop();
      }
    }
  });
});
test("login with valid credentials", function _callee5() {
  return regeneratorRuntime.async(function _callee5$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(driver.get("".concat(baseUrl, "/sign-in")));

        case 2:
          _context6.next = 4;
          return regeneratorRuntime.awrap(driver.findElement(By.id("email")).sendKeys(testEmail));

        case 4:
          _context6.next = 6;
          return regeneratorRuntime.awrap(driver.findElement(By.id("password")).sendKeys(testPassword));

        case 6:
          _context6.next = 8;
          return regeneratorRuntime.awrap(driver.findElement(By.css('button[type="submit"]')).click());

        case 8:
          _context6.next = 10;
          return regeneratorRuntime.awrap(driver.wait(until.urlIs("".concat(baseUrl, "/")), 20000));

        case 10:
          _context6.t0 = expect;
          _context6.next = 13;
          return regeneratorRuntime.awrap(driver.getCurrentUrl());

        case 13:
          _context6.t1 = _context6.sent;
          _context6.t2 = "".concat(baseUrl, "/");
          (0, _context6.t0)(_context6.t1).toBe(_context6.t2);

        case 16:
        case "end":
          return _context6.stop();
      }
    }
  });
});