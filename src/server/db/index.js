import { Sequelize } from "sequelize";
import { readdirSync } from "fs";
import { basename as _basename, join } from "path";
import associations from "./associations";

require("dotenv").config({ path: "./.env" });

const environment = process.env.NODE_ENV || "development";
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT, SEQUELIZE_DEBUG } =
	process.env;
const prodConnectionParams = {
	logging: JSON.parse(SEQUELIZE_DEBUG),
	native: true,
	dialectOptions: {
		ssl: {
			require: true,
			// Ref.: https://github.com/brianc/node-postgres/issues/2009
			rejectUnauthorized: false,
		},
		keepAlive: true,
	},
	ssl: true,
	define: {
		timestamps: false,
	},
};
const sequelize = new Sequelize(
	`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
	environment !== "production"
		? {
				logging: JSON.parse(SEQUELIZE_DEBUG), // set to console.log to see the raw SQL queries
				native: false, // lets Sequelize know we can use pg-native for ~30% more speed
		  }
		: prodConnectionParams
);
const basename = _basename(__filename);
const modelDefiners = [];
// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
readdirSync(join(__dirname, "/models"))
	.filter(
		(file) =>
			file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
	)
	.forEach((file) => {
		modelDefiners.push(require(join(__dirname, "/models", file)).default);
	});
// Inyectamos la conexión (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
	entry[0][0].toUpperCase() + entry[0].slice(1),
	entry[1],
]);

sequelize.models = Object.fromEntries(capsEntries);

/*
 * associations
 */
associations(sequelize);

export default sequelize;
