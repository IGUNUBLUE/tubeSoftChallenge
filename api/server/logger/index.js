import { createLogger, format, transports } from "winston";
const { combine, timestamp, printf, colorize } = format;

const myFormat = printf(({ level, message, timestamp }) => {
	return `${timestamp} ${level}: ${message}`;
});
const logger = () => {
	return createLogger({
		level: "debug",
		format: combine(
			colorize({ all: true }),
			timestamp({ format: "YY-MM-DD HH:MM:SS" }),
			myFormat
		),
		defaultMeta: { service: "user-service" },
		transports: [
			new transports.Console(),
			new transports.File({
				filename: "errors.log",
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
