import { createLogger, format, transports } from "winston";
import moment from 'moment';

const { combine, timestamp, printf } = format;
const myFormat = printf(({ level, message, timestamp }) => {
	return `${timestamp} ${level}: ${message}`;
});
const logger = () => {
	return createLogger({
		level: "debug",
		format: combine(
			timestamp(),
			myFormat
		),
		defaultMeta: { service: "user-service" },
		transports: [
			new transports.Console(),
			new transports.File({
				filename: `./logs/${moment().format().toString()}.log`,
			}),
		],
	});
};

/** Examples of logging
 * logger.info("information log")
 * logger.warn("warning log")
 * logger.error("error log")
 * logger.debug("debug log")
 */

export default logger;
