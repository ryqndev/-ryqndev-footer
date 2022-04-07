"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _components = require("./components");

var _BackgroundTextWall = _interopRequireDefault(require("./components/BackgroundTextWall/BackgroundTextWall"));

var _FooterModule = _interopRequireDefault(require("./Footer.module.scss"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Footer = () => {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("footer", {
    className: _FooterModule.default.container,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: _FooterModule.default.content,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_BackgroundTextWall.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Contact, {})]
    })
  });
};

var _default = Footer;
exports.default = _default;