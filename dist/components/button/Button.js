"use strict";

require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.string.starts-with.js");
var _react = _interopRequireWildcard(require("react"));
var _utilities = require("../datePicker/utilities.js");
var _ThemeContext = require("../../ThemeContext.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function () {
  const styles = ".buttons {\n  width: 100%;\n}\n.buttons .btn {\n  box-sizing: border-box;\n  border-radius: 20px;\n  font-family: inherit;\n  font-size: 0.875em;\n  font-weight: 500;\n  font-style: normal;\n  line-height: 20px;\n  letter-spacing: 0.1px;\n  align-content: center;\n  position: relative;\n  height: 40px;\n  padding: 0 2em;\n}\n.buttons .big {\n  width: 19em !important;\n}\n.buttons .text {\n  background-color: transparent;\n  border: none;\n}";
  const fileName = "Button_button";
  const element = document.querySelector("style[data-sass-component='Button_button']");
  if (!element) {
    const styleBlock = document.createElement("style");
    styleBlock.innerHTML = styles;
    styleBlock.setAttribute("data-sass-component", fileName);
    document.head.appendChild(styleBlock);
  } else {
    element.innerHTML = styles;
  }
})();
function Button(props) {
  const [colors] = (0, _ThemeContext.useTheme)();
  const [state, setState] = (0, _react.useState)('default');
  let button = (0, _react.useRef)();
  function formatColor(color) {
    if (typeof color === "string") {
      if (color.startsWith('#')) return (0, _utilities.hexToRGB)(color);else return color;
    }
  }
  const styles = {
    text: {
      default: {
        color: colors.primary,
        backgroundColor: 'transparent'
      },
      hovered: {
        backgroundColor: "rgba(".concat(formatColor(colors.primary), ", .08)")
      },
      activated: {
        backgroundColor: "rgba(".concat(formatColor(colors.primary), ", .12)")
      }
    }
  };
  let buttonStyle = _objectSpread(_objectSpread({}, styles[props.type]['default']), styles[props.type][state]);
  const handleClick = e => {
    e.stopPropagation();
    props.click();
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "buttons"
  }, /*#__PURE__*/_react.default.createElement("button", {
    ref: button,
    className: typeof props.size !== 'undefined' ? props.type + ' btn ' + props.size : props.type + ' btn',
    onClick: handleClick,
    style: _objectSpread(_objectSpread({}, props.style), buttonStyle),
    onMouseEnter: () => setState('hovered'),
    onMouseLeave: () => setState('default'),
    onMouseDown: () => setState('activated')
  }, props.children));
}