"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _utilities = require("./utilities.js");
var _react = _interopRequireDefault(require("react"));
var _right = require("./icons/right.svg");
var _sideArrow = require("./icons/sideArrow.svg");
var _ThemeContext = require("../../ThemeContext.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function HeaderDate(props) {
  const [colors] = (0, _ThemeContext.useTheme)();
  const styles = {
    icons: {
      fill: colors.onSurfaceVariant
    },
    smallDate: {
      color: colors.onSurfaceVariant
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "localSelectionRow grid-order"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "date",
    onClick: props.onClickDown,
    style: styles.smallDate
  }, (0, _utilities.monthName)(props.month), " ", props.year, /*#__PURE__*/_react.default.createElement(_right.ReactComponent, {
    className: "icon-down",
    style: styles.icons
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "icons"
  }, /*#__PURE__*/_react.default.createElement(_sideArrow.ReactComponent, {
    style: styles.icons,
    className: "icon-left",
    onClick: props.onClickBackward
  }), /*#__PURE__*/_react.default.createElement(_sideArrow.ReactComponent, {
    style: styles.icons,
    className: "icon-right",
    onClick: props.onClickForward
  })));
}
var _default = HeaderDate;
exports.default = _default;