import { createLogger, format, transports } from "winston";
import moment from "moment";

const { combine, timestamp, printf } = format;
const myFormat = printf(({ level, message, timestamp }) => {
	return `${timestamp} ${level}: ${message}`;
});
const logger = () => {
	return createLogger({
		level: "debug",
		format: combine(timestamp(), myFormat),
		defaultMeta: { service: "user-service" },
		transports: [
			new transports.Console(),
			new transports.File({
				filename: `./logs/${moment().format().toString()}.log`,
			}),
		],
	});
};

export default logger;
