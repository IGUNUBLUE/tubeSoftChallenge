const associations = (sequelize) => {
	const { Products, Users, Carts } = sequelize.models;
	// product | cart
	Products.belongsToMany(Carts, { through: "products_carts" });
	Carts.belongsToMany(Products, { through: "products_carts" });
	// user | cart
	Users.belongsToMany(Carts, { through: "users_carts" });
	Carts.belongsTo(Users, { through: "users_carts" });
};

export default associations;
