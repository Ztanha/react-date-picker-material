"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _utilities = require("../utilities.js");
var _react = _interopRequireWildcard(require("react"));
var _ThemeContext = require("../../../ThemeContext.js");
var _HeaderDate = _interopRequireDefault(require("../HeaderDate.js"));
var _Actions = _interopRequireDefault(require("../Actions.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function YearMode(props) {
  const [colors] = (0, _ThemeContext.useTheme)();
  const [cells, setCells] = (0, _react.useState)([]);
  const refYear = (0, _react.useRef)();
  const [selectedYear, setSelectedYear] = (0, _react.useState)();
  const styles = {
    cell: {
      color: colors.onSurfaceVariant
    },
    now: {
      backgroundColor: colors.primary,
      color: colors.onPrimary
    },
    selected: {
      border: "1px solid ".concat(colors.primary)
    }
  };
  function reloadCells(referenceYear) {
    setCells((0, _utilities.range)(referenceYear - 6, referenceYear + 8));
    refYear.current = referenceYear;
  }
  (0, _react.useEffect)(() => {
    reloadCells(props.year);
  }, [props.year]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_HeaderDate.default, {
    onClickForward: () => reloadCells(refYear.current + 15),
    onClickBackward: () => reloadCells(refYear.current - 15),
    onClickDown: () => props.setMode('days'),
    month: props.month,
    year: selectedYear || props.year
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "years",
    style: {}
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "years-grid"
  }, cells.map(x => /*#__PURE__*/_react.default.createElement("div", {
    className: x === props.year ? 'now cell' : 'cell',
    onClick: () => setSelectedYear(x),
    key: x,
    style: x === selectedYear ? styles.selected : x === props.year ? styles.now : styles.cell
  }, x))), /*#__PURE__*/_react.default.createElement("div", {
    className: "line",
    style: {
      backgroundColor: colors.outlineVariant
    }
  }), /*#__PURE__*/_react.default.createElement(_Actions.default, {
    onClickLeftOne: props.hide,
    onClickRightOne: () => props.onChange(selectedYear)
  })));
}
var _default = YearMode;
exports.default = _default;