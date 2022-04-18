import { DataTypes } from "sequelize";

const products_carts = (sequelize) =>
	sequelize.define("products_carts", {
		quantity: {
			type: DataTypes.NUMERIC(50, 0),
			allowNull: false,
		},
	});

export default products_carts;
