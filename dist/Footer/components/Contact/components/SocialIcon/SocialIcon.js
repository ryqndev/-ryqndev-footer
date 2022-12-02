"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
var cn = _interopRequireWildcard(require("./SocialIcon.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
    className: cn.container,
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
      className: cn.container,
      "data-mouse-hover": "button",
      "data-mouse-hover-text": text,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
        onClick: () => setOpen(true)
      })
    }), open && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: cn.backdrop,
      onClick: () => setOpen(false),
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: cn.popup,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: "DISCORD:"
        }), "ryqndev#9909"]
      })
    })]
  });
};
var _default = /*#__PURE__*/(0, _react.memo)(SocialIcon);
exports.default = _default;