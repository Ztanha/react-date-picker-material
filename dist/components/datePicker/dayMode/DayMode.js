"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _ThemeContext = require("../../../ThemeContext.js");
var _utilities = require("../utilities.js");
var _react = _interopRequireWildcard(require("react"));
var _HeaderDate = _interopRequireDefault(require("../HeaderDate.js"));
var _Actions = _interopRequireDefault(require("../Actions.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const DayMode = props => {
  const [colors] = (0, _ThemeContext.useTheme)();
  const weekday = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const [cells, setCells] = (0, _react.useState)();
  const [selectedDay, setSelectedDay] = (0, _react.useState)();
  const date = (0, _react.useRef)((0, _utilities.getTimestampWithoutTime)(props.date));
  const [refMonth, setRefMonth] = (0, _react.useState)(new Date(date.current).getMonth());
  const [refYear, setRefYear] = (0, _react.useState)(new Date(date.current).getFullYear());
  const styles = {
    calGrids: {
      color: colors.onSurface
    },
    today: {
      backgroundColor: colors.primary,
      color: colors.onPrimary
    },
    selectedCell: {
      border: "1px solid ".concat(colors.primary)
    }
  };
  function reloadCells(timestamp) {
    let calendar = [];
    let date = new Date(timestamp);
    const days = (0, _utilities.daysInMonth)(timestamp);
    const firstDay = (0, _utilities.getMonthStartDay)(timestamp);
    for (let i = 1; i <= days; i++) {
      calendar.push(date.setDate(i));
    }
    for (let j = 0; j < firstDay; j++) {
      calendar.unshift(" ");
    }
    setCells(calendar);
  }
  function handleSave() {
    props.setDate(selectedDay || props.date);
    props.selectDate();
  }
  function resetRefMonth(newValue) {
    let value;
    if (newValue > 12) {
      setRefYear(refYear + 1);
      value = newValue % 12;
    } else if (newValue === 0) {
      value = 0;
    } else if (newValue < 0) {
      setRefYear(refYear - 1);
      value = 12 + newValue;
    } else if (newValue === 12) {
      setRefYear(refYear + 1);
      value = 0;
    } else {
      value = newValue;
    }
    setRefMonth(value);
  }
  (0, _react.useEffect)(() => {
    reloadCells(new Date(refYear, refMonth + 1, 0).getTime());
  }, [refMonth, setCells, refYear]);
  (0, _react.useEffect)(() => {
    const t = new Date(props.date);
    const m = t.getMonth();
    const y = t.getFullYear();
    date.current = (0, _utilities.getTimestampWithoutTime)(props.date);
    setRefMonth(m);
    setRefYear(y);
    reloadCells(props.date);
  }, [props.date, date, setRefMonth, setRefYear]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_HeaderDate.default, {
    onClickForward: () => resetRefMonth(refMonth + 1),
    onClickBackward: () => resetRefMonth(refMonth - 1),
    onClickDown: () => props.setMode('years'),
    month: refMonth,
    year: refYear
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "days",
    style: styles.calGrids
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "days-grid"
  }, weekday.map((x, index) => /*#__PURE__*/_react.default.createElement("div", {
    key: index,
    className: "first-row cell"
  }, x)), cells === null || cells === void 0 ? void 0 : cells.map((x, index) => /*#__PURE__*/_react.default.createElement("div", {
    key: index,
    onClick: () => setSelectedDay(x),
    className: x !== " " ? 'cell' : 'empty-cell',
    style: x === props.date ? styles.today : x === selectedDay ? styles.selectedCell : {}
  }, new Date(x).getDate() || ''))), /*#__PURE__*/_react.default.createElement(_Actions.default, {
    onClickLeftOne: props.hide,
    onClickRightOne: handleSave
  })));
};
var _default = DayMode;
exports.default = _default;