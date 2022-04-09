"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _default = function _default(sequelize) {
  sequelize.define('product', {
    name: {
      type: _sequelize.DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false //  charset: 'utf8',
    //  collate: 'utf8_general_ci', 

  });
};

exports["default"] = _default;