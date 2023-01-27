"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeProvider = ThemeProvider;
exports.useTheme = useTheme;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ThemeContext = /*#__PURE__*/(0, _react.createContext)(null);
function ThemeProvider(props) {
  const [themes, setThemes] = (0, _react.useState)({
    light: {
      primary: '#6750A4',
      onSurfaceVariant: '#49454F',
      onSurface: '#1C1B1F',
      outlineVariant: '#CAC4D0',
      scrim: 'rgb(0,0,0,0.25)',
      onPrimary: '#ffffff',
      surface3: "linear-gradient(0deg, #FFFBFE, #FFFBFE)," + "linear-gradient(0deg, rgba(103, 80, 164, 0.11), rgba(103, 80, 164, 0.11))"
    },
    dark: {
      primary: '#D0BCFF',
      onSurfaceVariant: '#CAC4D0',
      onSurface: '#E6E1E5',
      outlineVariant: '#49454F',
      scrim: 'rgb(0,0,0,0.25)',
      onPrimary: '#381E72',
      surface3: 'linear-gradient(0deg, #1C1B1F, #1C1B1F),' + '    linear-gradient(0deg, rgba(208, 188, 255, 0.11), rgba(208, 188, 255, 0.11))'
    }
  });
  const [theme, setTheme] = (0, _react.useState)('light');
  let colors = theme === 'dark' ? themes === null || themes === void 0 ? void 0 : themes.dark : themes === null || themes === void 0 ? void 0 : themes.light;
  return /*#__PURE__*/_react.default.createElement(ThemeContext.Provider, _extends({}, props, {
    value: [colors, setTheme, setThemes]
  }));
}
function useTheme() {
  const context = (0, _react.useContext)(ThemeContext);
  if (!context) throw new Error('Not inside the provider.');
  return context; //returns [theme,updateTheme,updateColors]
}