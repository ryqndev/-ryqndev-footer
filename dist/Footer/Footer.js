"use strict";

require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _components = require("./components");
var _BackgroundTextWall = _interopRequireDefault(require("./components/BackgroundTextWall/BackgroundTextWall"));
var cn = _interopRequireWildcard(require("./Footer.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Footer = () => {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("footer", {
    className: cn.container,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: cn.content,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_BackgroundTextWall.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Contact, {})]
    })
  });
};
var _default = /*#__PURE__*/(0, _react.memo)(Footer);
exports.default = _default;