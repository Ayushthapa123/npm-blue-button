"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BlueButton;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function BlueButton() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    style: {
      color: "white",
      backgroundColor: "blue",
      fontSize: "50px"
    }
  }, "Blue Button 1.1.1"));
}