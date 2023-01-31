"use strict";

require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _Modal = require("../modal/Modal.js");
var _react = _interopRequireWildcard(require("react"));
var _pencil = require("./icons/pencil.svg");
var _ThemeContext = require("../../ThemeContext.js");
var _DayMode = _interopRequireDefault(require("./dayMode/DayMode.js"));
var _YearMode = _interopRequireDefault(require("./yearMode/YearMode.js"));
var _utilities = require("./utilities.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function () {
  const styles = ".DatePicker .actions {\n  margin-top: 0.5em;\n}\n.DatePicker .actions .btns-container {\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: end;\n}\n.DatePicker .calendar-header {\n  font-family: inherit;\n  font-size: 0.75em;\n  font-weight: 500;\n  font-style: normal;\n  line-height: 16px;\n  letter-spacing: 0.5px;\n  align-content: center;\n}\n.DatePicker .pointer {\n  position: absolute;\n  width: 3em;\n  height: 3em;\n  border-radius: 100%;\n}\n.DatePicker .header-date {\n  font-family: inherit;\n  font-size: 2em;\n  font-weight: 400;\n  line-height: 32px;\n  letter-spacing: 0;\n  text-align: left;\n  padding: 0.5em 0;\n  align-items: center;\n}\n.DatePicker .header-date svg {\n  padding-right: 8px;\n  width: 0.7em;\n  justify-self: center;\n}\n.DatePicker .grid-order {\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: space-between;\n}\n.DatePicker .localSelectionRow {\n  font-family: inherit;\n  font-size: 0.875em;\n  font-weight: 500;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: 0.1px;\n  align-content: center;\n  vertical-align: middle;\n}\n.DatePicker .localSelectionRow .date {\n  padding: 1em 0;\n  cursor: pointer;\n}\n.DatePicker .localSelectionRow .date svg {\n  width: 0.33em;\n  padding: 0 0.5em;\n}\n.DatePicker .icon-down {\n  transform: rotate(90deg);\n  width: 0.4em;\n  margin: 0 0.4em;\n  vertical-align: middle;\n}\n.DatePicker .icons {\n  cursor: pointer;\n}\n.DatePicker .icons svg {\n  width: 0.6em;\n  padding: 1em;\n}\n.DatePicker .icons .icon-left {\n  transform: rotate(180deg);\n}\n.DatePicker .line {\n  position: absolute;\n  width: 100%;\n  height: 0.1em;\n  left: 0;\n}\n.DatePicker .years {\n  min-width: 304px;\n  font-family: inherit;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n.DatePicker .years .years-grid {\n  margin: 10px 0;\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  grid-template-rows: repeat(5, 40px);\n  grid-gap: 10px;\n}\n.DatePicker .years .now {\n  font-family: inherit;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 1em;\n  line-height: 24px;\n  letter-spacing: 0.15px;\n  text-align: left;\n}\n.DatePicker .cell {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100px;\n  cursor: pointer;\n}\n.DatePicker .empty-cell {\n  border: none !important;\n  pointer-events: none !important;\n  cursor: none;\n}\n.DatePicker .days .days-grid {\n  box-sizing: border-box;\n  min-width: 304px;\n  font-family: inherit;\n  font-size: 0.75em;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: 0.400000006px;\n  text-align: left;\n  display: grid;\n  grid-template-columns: repeat(7, auto);\n  grid-template-rows: repeat(6, 40px);\n  grid-gap: 4px;\n}\n.DatePicker .days .days-grid span {\n  border-radius: 100%;\n}\n.DatePicker .days .days-grid .first-row {\n  pointer-events: none !important;\n  cursor: none !important;\n}";
  const fileName = "DatePicker_datePicker";
  const element = document.querySelector("style[data-sass-component='DatePicker_datePicker']");
  if (!element) {
    const styleBlock = document.createElement("style");
    styleBlock.innerHTML = styles;
    styleBlock.setAttribute("data-sass-component", fileName);
    document.head.appendChild(styleBlock);
  } else {
    element.innerHTML = styles;
  }
})();
const DatePicker = props => /*#__PURE__*/_react.default.createElement(_ThemeContext.ThemeProvider, null, /*#__PURE__*/_react.default.createElement(ActualDatePicker, props));
function ActualDatePicker(props) {
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [mode, setMode] = (0, _react.useState)('days');
  const date = (0, _react.useRef)(new Date());
  const [month, setMonth] = (0, _react.useState)(date.current.getMonth());
  const [year, setYear] = (0, _react.useState)(date.current.getFullYear());
  const [colors, setTheme, setColors] = (0, _ThemeContext.useTheme)();
  (0, _react.useEffect)(() => {
    if (props.date) {
      const tempDate = new Date(props.date);
      setMonth(tempDate.getMonth());
      setYear(tempDate.getFullYear());
      date.current = tempDate;
    }
  }, [props.date, setMonth, setYear, date]);
  function handleYearChange(year) {
    props.setDate(new Date(props.date).setFullYear(year));
    setMode('days');
  }
  const styles = {
    datePicker: {
      color: colors.onSurface,
      background: colors.surface3,
      fontFamily: 'Roboto,-apple-system, Ubuntu, sans-serif'
    },
    title: {
      color: colors.onSurfaceVariant
    },
    calHeader: {
      color: colors.onSurface
    },
    icons: {
      fill: colors.onSurfaceVariant
    }
  };
  (0, _react.useEffect)(() => {
    if (props.theme) setTheme(props.theme);
  }, [setTheme, props.theme]);
  (0, _react.useEffect)(() => {
    if (typeof props.colors !== "undefined") {
      setColors(props.colors);
    }
  }, [props.colors, setColors]);
  return props.show && /*#__PURE__*/_react.default.createElement("div", {
    className: "DatePicker",
    style: _objectSpread({}, styles.datePicker)
  }, /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    show: props.show,
    hide: props.hide,
    style: props.style
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "calendar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "calendar-header"
  }, /*#__PURE__*/_react.default.createElement("label", {
    style: styles.title
  }, props.title || 'Select date'), /*#__PURE__*/_react.default.createElement("div", {
    className: "header-date grid-order",
    style: styles.calHeader
  }, weekday[date === null || date === void 0 ? void 0 : date.current.getDay()], ",", ' ' + (0, _utilities.monthName)(date === null || date === void 0 ? void 0 : date.current.getMonth()).slice(0, 3) + ' ', date === null || date === void 0 ? void 0 : date.current.getDate(), /*#__PURE__*/_react.default.createElement(_pencil.ReactComponent, {
    style: styles.icons
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "line",
    style: {
      backgroundColor: colors.outlineVariant
    }
  }), mode === 'days' ? /*#__PURE__*/_react.default.createElement(_DayMode.default, {
    setDate: props.setDate,
    date: date.current.valueOf(),
    setMode: setMode,
    hide: props.hide,
    selectDate: props.selectDate
  }) : /*#__PURE__*/_react.default.createElement(_YearMode.default, {
    year: year,
    month: month,
    onChange: handleYearChange,
    setMode: setMode,
    hide: props.hide
  }))));
}
var _default = DatePicker;
exports.default = _default;