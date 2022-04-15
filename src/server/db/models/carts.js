import { DataTypes } from "sequelize";

const carts = (sequelize) =>
	sequelize.define("carts", {
		state: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		paymentState: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		total: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});

export default carts;
