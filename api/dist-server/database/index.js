"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = require("sequelize");

var _fs = require("fs");

var _path = require("path");

require("dotenv").config({
  path: "../.env"
});

var environment = process.env.NODE_ENV || "development";
var _process$env = process.env,
    DB_USER = _process$env.DB_USER,
    DB_PASSWORD = _process$env.DB_PASSWORD,
    DB_HOST = _process$env.DB_HOST,
    DB_NAME = _process$env.DB_NAME,
    DB_PORT = _process$env.DB_PORT;
var prodConnectionParams = {
  logging: false,
  "native": false,
  dialectOptions: {
    ssl: {
      require: true,
      // Ref.: https://github.com/brianc/node-postgres/issues/2009
      rejectUnauthorized: false
    },
    keepAlive: true
  },
  ssl: true,
  define: {
    timestamps: false
  }
};
var sequelize = new _sequelize.Sequelize("postgres://".concat(DB_USER, ":").concat(DB_PASSWORD, "@").concat(DB_HOST, ":").concat(DB_PORT, "/").concat(DB_NAME), environment !== "production" ? {
  logging: false,
  // set to console.log to see the raw SQL queries
  "native": false // lets Sequelize know we can use pg-native for ~30% more speed

} : prodConnectionParams);
exports.sequelize = sequelize;
var basename = (0, _path.basename)(__filename);
var modelDefiners = []; // Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners

(0, _fs.readdirSync)((0, _path.join)(__dirname, "/models")).filter(function (file) {
  return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
}).forEach(function (file) {
  modelDefiners.push(require((0, _path.join)(__dirname, "/models", file))["default"]);
}); // Inyectamos la conexión (sequelize) a todos los modelos

modelDefiners.forEach(function (model) {
  return model(sequelize);
});
var entries = Object.entries(sequelize.models);
var capsEntries = entries.map(function (entry) {
  return [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]];
});
sequelize.models = Object.fromEntries(capsEntries);