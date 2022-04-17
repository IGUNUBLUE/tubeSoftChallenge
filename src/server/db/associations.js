const associations = (sequelize) => {
	const { Products, Users, Carts } = sequelize.models;
	// product | cart
	Products.belongsToMany(Carts, { through: "products_carts" });
	Carts.belongsToMany(Products, { through: "products_carts" });
	// user | cart
	Users.hasMany(Carts);
	Carts.belongsTo(Users);
};

export default associations;
