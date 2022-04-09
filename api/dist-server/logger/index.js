"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _winston = require("winston");

var combine = _winston.format.combine,
    timestamp = _winston.format.timestamp,
    printf = _winston.format.printf,
    colorize = _winston.format.colorize;
var myFormat = printf(function (_ref) {
  var level = _ref.level,
      message = _ref.message,
      timestamp = _ref.timestamp;
  return "".concat(timestamp, " ").concat(level, ": ").concat(message);
});

var logger = function logger() {
  return (0, _winston.createLogger)({
    level: "debug",
    format: combine(colorize({
      all: true
    }), timestamp({
      format: "YY-MM-DD HH:MM:SS"
    }), myFormat),
    defaultMeta: {
      service: "user-service"
    },
    transports: [new _winston.transports.Console(), new _winston.transports.File({
      filename: "errors.log"
    })]
  });
};
/** Examples of logging
 * logger.info("information log")
 * logger.warn("warning log")
 * logger.error("error log")
 * logger.debug("debug log")
 */


var _default = logger;
exports["default"] = _default;