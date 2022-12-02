"use strict";

require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
var cn = _interopRequireWildcard(require("./Contact.module.scss"));
var _components = require("./components");
var _website = require("./assets/icons/website.svg");
var _github = require("./assets/icons/github.svg");
var _instagram = require("./assets/icons/instagram.svg");
var _linkedin = require("./assets/icons/linkedin.svg");
var _discord = require("./assets/icons/discord.svg");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const socials = [{
  name: 'website',
  text: 'https://ryqn.dev',
  href: 'https://ryqn.dev',
  Icon: _website.ReactComponent
}, {
  name: 'github',
  text: 'ryqndev',
  href: 'https://github.com/ryqndev',
  Icon: _github.ReactComponent
}, {
  name: 'linkedin',
  text: 'ryanqyang',
  href: 'https://linkedin.com/in/ryanqyang',
  Icon: _linkedin.ReactComponent
}, {
  name: 'instagram',
  text: '@bingeboba',
  href: 'https://www.instagram.com/bingeboba/',
  Icon: _instagram.ReactComponent
}, {
  name: 'instagram',
  text: '@veryfewsbux',
  href: 'https://www.instagram.com/veryfexsbux/',
  Icon: _instagram.ReactComponent
}, {
  name: 'discord',
  text: 'ryqndev#9909',
  href: 'discord',
  Icon: _discord.ReactComponent
}];
const Contact = () => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
  className: cn.container,
  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
    className: cn.contact,
    children: "contact"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: cn.icons,
    children: socials.map(social => /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.SocialIcon, _objectSpread({}, social), social.href))
  })]
});
var _default = Contact;
exports.default = _default;