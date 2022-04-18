import { DataTypes } from "sequelize";

const carts = (sequelize) =>
	sequelize.define("carts", {
		isCurrent: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		state: {
			type: DataTypes.ENUM(["saved", "open", "closed"]),
			allowNull: false,
		},
		paymentState: {
			type: DataTypes.ENUM(["unpaid", "paid"]),
			allowNull: false,
		},
		total: {
			type: DataTypes.NUMERIC(50, 2),
			allowNull: false,
		},
	});

export default carts;
