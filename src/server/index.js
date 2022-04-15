import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import routes from "./routes";
import debugLib from 'debug';
import http from 'http';
import { sequelize as dbConnection } from './db';
import winstonLogger from './lib/logger';

let app = express();
const log = winstonLogger()
const debug = debugLib('api:server');
let server = http.createServer(app); // Create HTTP server.

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
	"/static",
	express.static(path.join(__dirname, "..", "..", "dist", "static"))
);

// routes
app.use('/', routes);

// Get port from environment and store in Express.
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Listen on provided port, on all network interfaces.
 * DB sync
 */

dbConnection.sync({ force: false }).then(() => {
  server.listen(port, () => {
		log.info(`database connected`);
		log.info(`all models synced`);
    log.info(`API listening at ${port}`);
  });
}).catch(err => {
	log.error(err);
});
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}