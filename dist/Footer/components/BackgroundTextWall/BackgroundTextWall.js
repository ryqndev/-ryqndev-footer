"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _BackgroundTextWallModule = _interopRequireDefault(require("./BackgroundTextWall.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const PROJECT_NAMES = 'bobawatch pickbanpro learnryqndev datavis caeno spotimaps morphvism mymo tftactics rdsl digitalexplorers fearfilter rememory ';
const BackgroundTextWall = () => /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
  className: _BackgroundTextWallModule.default.container,
  children: PROJECT_NAMES.repeat(10).split(' ').map((project, idx) => /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
    children: project
  }, idx))
});
var _default = /*#__PURE__*/(0, _react.memo)(BackgroundTextWall);
exports.default = _default;