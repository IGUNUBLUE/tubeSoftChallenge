import { DataTypes } from "sequelize";

const users = (sequelize) =>
	sequelize.define("users", {
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
		},
		lastName: {
			type: DataTypes.STRING,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});

export default users;
