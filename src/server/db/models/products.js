import { DataTypes } from "sequelize";

const product = (sequelize) => {
	sequelize.define(
		"product",
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			color: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			size: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			price: {
				type: DataTypes.NUMERIC(50, 2),
				allowNull: false,
			},
			brand: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			model: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			gender: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			type: {
				type: DataTypes.STRING,
			},
		},
		{
			timestamps: false,
		}
	);
};

export default product;
