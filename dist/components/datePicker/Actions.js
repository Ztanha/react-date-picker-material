"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Button = _interopRequireDefault(require("../button/Button.js"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Actions(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "actions"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "btns-container"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    type: 'text',
    click: props.onClickLeftOne
  }, "Cancel"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    type: 'text',
    click: props.onClickRightOne
  }, "OK")));
}
var _default = Actions;
exports.default = _default;