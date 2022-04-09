"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _get = _interopRequireDefault(require("./product/get"));

var router = (0, _express.Router)();
// Routes #####################################################################
// Product.
router.use("/product", _get["default"]);
var _default = router;
exports["default"] = _default;