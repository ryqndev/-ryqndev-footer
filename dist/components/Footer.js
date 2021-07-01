"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _chinese = require("../assets/chinese.svg");

var _english = require("../assets/english.svg");

var _github = require("../assets/github.svg");

var _gmail = require("../assets/gmail.svg");

var _lightLogo = require("../assets/light-logo.svg");

var _profileTransparentSquare = _interopRequireDefault(require("../assets/profile-transparent-square.png"));

var _FooterModule = _interopRequireDefault(require("./Footer.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Footer = () => {
  return /*#__PURE__*/React.createElement("footer", {
    className: _FooterModule.default.wrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: _FooterModule.default.background
  }, /*#__PURE__*/React.createElement(_chinese.ReactComponent, null), /*#__PURE__*/React.createElement("div", {
    className: _FooterModule.default['made-with--note']
  }, "Made with", ' ', /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": "love"
  }, "\u2764\uFE0F"), ' ', "in irvine on sbux", ' ', /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": "coffee"
  }, "\u2615"), ' ', "& boba")), /*#__PURE__*/React.createElement("div", {
    className: _FooterModule.default.profile
  }, /*#__PURE__*/React.createElement("img", {
    src: _profileTransparentSquare.default,
    alt: "Ryan Yang Profile"
  }), /*#__PURE__*/React.createElement(_english.ReactComponent, null), /*#__PURE__*/React.createElement("div", {
    className: _FooterModule.default.icons
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://ryqn.dev/"
  }, /*#__PURE__*/React.createElement(_lightLogo.ReactComponent, null)), /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/ryqndev"
  }, /*#__PURE__*/React.createElement(_github.ReactComponent, null)), /*#__PURE__*/React.createElement("a", {
    href: "mailto:ryanqyang@gmail.com"
  }, /*#__PURE__*/React.createElement(_gmail.ReactComponent, null)))), /*#__PURE__*/React.createElement("div", {
    className: _FooterModule.default.articles
  }, /*#__PURE__*/React.createElement("h3", null, "Featured Articles"), /*#__PURE__*/React.createElement("a", {
    href: "https://dailybruin.com/2019/10/22/app-developed-by-students-allows-users-to-track-boba-purchases-unites-community",
    className: _FooterModule.default.article
  }, /*#__PURE__*/React.createElement("h4", null, "Daily Bruin"), /*#__PURE__*/React.createElement("time", {
    dateTime: "2019-10-22"
  }, "Oct 22, 2019"), /*#__PURE__*/React.createElement("span", null, "App developed by students allows users to track boba purchases, unites community")), /*#__PURE__*/React.createElement("a", {
    href: "https://www.cs.uci.edu/student-spotlight-ryan-yang-and-the-instant-popularity-of-boba-watch/",
    className: _FooterModule.default.article
  }, /*#__PURE__*/React.createElement("h4", null, "UCI CS"), /*#__PURE__*/React.createElement("time", {
    dateTime: "2019-10-18"
  }, "Oct 18, 2019"), /*#__PURE__*/React.createElement("span", null, "Student Spotlight: Ryan Yang and the Instant Popularity of Boba Watch")), /*#__PURE__*/React.createElement("a", {
    href: "https://theindependent.sg/college-kids-create-app-tracking-bubble-tea-expenses/",
    className: _FooterModule.default.article
  }, /*#__PURE__*/React.createElement("h4", null, "Independent"), /*#__PURE__*/React.createElement("time", {
    dateTime: "2019-10-13"
  }, "Oct 13, 2019"), /*#__PURE__*/React.createElement("span", null, "College kids create app tracking bubble tea expenses")), /*#__PURE__*/React.createElement("a", {
    href: "https://nextshark.com/boba-watch-app-college-students/",
    className: _FooterModule.default.article
  }, /*#__PURE__*/React.createElement("h4", null, "Next Shark"), /*#__PURE__*/React.createElement("time", {
    dateTime: "2019-10-11"
  }, "Oct 11, 2019"), /*#__PURE__*/React.createElement("span", null, "Genius College Students Create a \u2018Boba Watch\u2019 App to Track Milk Tea Expenses")), /*#__PURE__*/React.createElement("a", {
    href: "https://mothership.sg/2019/10/boba-watch/",
    className: _FooterModule.default.article
  }, /*#__PURE__*/React.createElement("h4", null, "MothershipSG"), /*#__PURE__*/React.createElement("time", {
    dateTime: "2019-10-10"
  }, "Oct 10, 2019"), /*#__PURE__*/React.createElement("span", null, "Bubble tea app to track consumption & spending made by Subtle Asian Traits members")), /*#__PURE__*/React.createElement("h3", null, "Projects"), /*#__PURE__*/React.createElement("a", {
    href: "https://pickban.pro/",
    className: _FooterModule.default.article
  }, /*#__PURE__*/React.createElement("h4", null, "Pick Ban Pro"), /*#__PURE__*/React.createElement("time", {
    dateTime: "2021-5"
  }, "May 2021"), /*#__PURE__*/React.createElement("span", null, "https://pickban.pro")), /*#__PURE__*/React.createElement("a", {
    href: "https://boba.watch/",
    className: _FooterModule.default.article
  }, /*#__PURE__*/React.createElement("h4", null, "Boba Watch"), /*#__PURE__*/React.createElement("time", {
    dateTime: "2019-10"
  }, "Oct 2019"), /*#__PURE__*/React.createElement("span", null, "https://boba.watch"))));
};

var _default = /*#__PURE__*/(0, _react.memo)(Footer);

exports.default = _default;