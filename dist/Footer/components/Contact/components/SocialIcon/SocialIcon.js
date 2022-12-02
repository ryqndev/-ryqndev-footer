"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
var _SocialIconModule = _interopRequireDefault(require("./SocialIcon.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SocialIcon = _ref => {
  let {
    name,
    text,
    href,
    Icon
  } = _ref;
  return name === 'discord' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(DiscordIcon, {
    Icon: Icon
  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: href,
    className: _SocialIconModule.default.container,
    "data-mouse-hover": "button",
    "data-mouse-hover-text": text,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {})
  });
};

/**
 * Since Discord doesn't have profile links, we make a popup that displays
 * unique username
 */
const DiscordIcon = _ref2 => {
  let {
    Icon,
    text
  } = _ref2;
  const [open, setOpen] = (0, _react.useState)(false);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [' ', /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      href: "#ryqndev#9909",
      className: _SocialIconModule.default.container,
      "data-mouse-hover": "button",
      "data-mouse-hover-text": text,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
        onClick: () => setOpen(true)
      })
    }), open && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: _SocialIconModule.default.backdrop,
      onClick: () => setOpen(false),
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: _SocialIconModule.default.popup,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: "DISCORD:"
        }), "ryqndev#9909"]
      })
    })]
  });
};
var _default = /*#__PURE__*/(0, _react.memo)(SocialIcon);
exports.default = _default;