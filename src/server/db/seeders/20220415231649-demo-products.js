// eslint-disable-next-line strict
"use strict";

module.exports = {
	async up(queryInterface) {
		await queryInterface.bulkInsert(
			"products",
			[
				{
					name: "Reebok Runner 5.0",
					color: "Gris",
					size: "39",
					price: 34.99,
					brand: "Reebok",
					model: "H00912REEBO0201",
					gender: "Hombre",
					type: "Tenis deportivos",
					description: "Tenis Reebok Hombre Running Reebok Runner 5.0",
					imageLink: "/images/products/reebok_runner.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Running Galaxy 5",
					color: "Negro",
					size: "37",
					price: 33.99,
					brand: "ADIDAS",
					model: "FW6125GALAX0201",
					gender: "Mujer",
					type: "Tenis deportivos",
					description: "Tenis Adidas Mujer Running Galaxy 5",
					imageLink: "/images/products/adidas_running_galaxy_5.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Grand Court Base",
					color: "Blanco",
					size: "36",
					price: 32.99,
					brand: "ADIDAS",
					model: "GV7163GRAND0101",
					gender: "Mujer",
					type: "Casual",
					description: "Tenis Adidas Mujer Moda Grand Court Base",
					imageLink: "/images/products/adidas_grand_court_base.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Smash V2 L",
					color: "Blanco",
					size: "38",
					price: 40.99,
					brand: "Puma",
					model: "365215 01",
					gender: "Hombre",
					type: "Tenis moda",
					description: "Smash V2 L",
					imageLink: "/images/products/Smash_V2_L.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "12606Bkhp",
					color: "Negro",
					size: "38",
					price: 32.99,
					brand: "Skechers",
					model: "12606BKHP",
					gender: "Mujer",
					type: "Tenis moda",
					description: "Skechers",
					imageLink: "/images/products/12606Bkhp.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Tiger Runner",
					color: "White/black",
					size: "40",
					price: 45.99,
					brand: "Asics",
					model: "1202A070.101",
					gender: "Mujer",
					type: "Tenis moda",
					description: "Tenis Asics Mujer Moda Tiger Runner",
					imageLink: "/images/products/ASICS_Tiger_Runner.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Air Max 270 React",
					color: "Rosado",
					size: "36.5",
					price: 34.99,
					brand: "Nike",
					model: "CT1833-100-WHT",
					gender: "Mujer",
					type: "	Tenis moda",
					description: "Air Max 270 React",
					imageLink: "/images/products/Air_Max_270_React.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Moda Star X",
					color: "Negro/Azul",
					size: "38.5",
					price: 50.99,
					brand: "Starter",
					model: "STAR X HIGH NE",
					gender: "Hombre",
					type: "Tenis moda",
					description: "Tenis Starter Hombre Moda Star X",
					imageLink: "/images/products/Starter_Moda_Star_X.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Denimlab",
					color: "Gris",
					size: "34.5",
					price: 32.99,
					brand: "Denimlab",
					model: "SIENA GR",
					gender: "Hombre",
					type: "Tenis moda",
					description: "Tenis Denimlab Hombre Moda Siena",
					imageLink: "/images/products/Denimlab_Siena.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Brody",
					color: "Marron",
					size: "41",
					price: 50.45,
					brand: "ALDO",
					model: "BRODY220",
					gender: "Hombre",
					type: "Bota",
					description: "Brody",
					imageLink: "/images/products/Aldo_Brody.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Marv",
					color: "Blanco",
					size: "42",
					price: 35.32,
					brand: "Call it Spring",
					model: "MARV100",
					gender: "Hombre",
					type: "Bota",
					description: "Marv",
					imageLink: "/images/products/Call_It_Spring_Moda_Marv.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Swiftd",
					color: "Negro",
					size: "40",
					price: 100.34,
					brand: "ALDO",
					model: "SWIFTD001",
					gender: "Hombre",
					type: "Tenis",
					description: "Swiftd",
					imageLink: "/images/products/Tenis_Aldo_Swiftd.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Boati",
					color: "Negro",
					size: "39",
					price: 35.34,
					brand: "BASEMENT",
					model: "BOATI NE",
					gender: "Hombre",
					type: "Casual",
					description: "Boati",
					imageLink: "/images/products/Casuales_Basement_Boati.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Essential",
					color: "Negro",
					size: "38",
					price: 50.99,
					brand: "Under Armour",
					model: "3022954-006",
					gender: "Hombre",
					type: "deportivo",
					description: "Essential",
					imageLink: "/images/products/Under_Armour_Essential.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Wing High",
					color: "Blanco",
					size: "39",
					price: 45.99,
					brand: "Starter",
					model: "WING HIGH BL",
					gender: "Hombre",
					type: "Tenis",
					description: "Tenis Starter Hombre Moda Wing High",
					imageLink: "/images/products/starter_Wing_High.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Fe Mid 1920",
					color: "Negro",
					size: "35",
					price: 25.68,
					brand: "Feiyue",
					model: "FU100116",
					gender: "Hombre",
					type: "Tenis",
					description: "Fe Mid 1920",
					imageLink: "/images/products/Feiyue_Mid_1920.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Renew Lucent",
					color: "Gris/Negro",
					size: "38",
					price: 40.56,
					brand: "Nike",
					model: "BQ4235-008-BLK",
					gender: "Hombre",
					type: "Renew Lucent",
					description: "Tenis Nike Hombre Moda Renew Lucent",
					imageLink: "/images/products/Renew_Lucent.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Running Lehacy",
					color: "Rojo",
					size: "41",
					price: 100.99,
					brand: "Reebok",
					model: "G55279CL LE0201",
					gender: "Unisex",
					type: "Tenis",
					description: "Running Lehacy",
					imageLink: "/images/products/Running_Lehacy.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Moda Star X",
					color: "Gris",
					size: "38",
					price: 50.89,
					brand: "Starter",
					model: "STAR X GR",
					gender: "Hombre",
					type: "Tenis",
					description: "Moda Star X",
					imageLink: "/images/products/Moda_Star_X.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Moda Post",
					color: "Negro",
					size: "39",
					price: 99.99,
					brand: "Adidas Originals",
					model: "Q46409POST0101",
					gender: "Hombre",
					type: "Tenis",
					description: "Moda Post",
					imageLink: "/images/products/Adidas_Originals_Post.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Casuales Skiff",
					color: "Navy",
					size: "41.5",
					price: 50.99,
					brand: "NEWBOAT",
					model: "SKIFF AZ",
					gender: "Hombre",
					type: "Zapatos casuales",
					description: "Zapatos Casuales Skiff",
					imageLink: "/images/products/Casuales_Skiff.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Cross Training Taper",
					color: "Negro",
					size: "41",
					price: 38.10,
					brand: "Puma",
					model: "373018 01",
					gender: "Hombre",
					type: "Tenis",
					description: "Cross Training Taper",
					imageLink: "/images/products/Cross_Training_Taper.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Running 411",
					color: "Azul",
					size: "38.5",
					price: 36.78,
					brand: "New Balance",
					model: "M411LN2",
					gender: "Hombre",
					type: "Tenis",
					description: "Tenis New Balance Hombre Running 411",
					imageLink: "/images/products/Running_411.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Gel-Bnd",
					color: "Rojo",
					size: "38.5",
					price: 65.89,
					brand: "ASICS",
					model: "1021A145.004",
					gender: "Hombre",
					type: "Tenis",
					description: "Tenis Asics Hombre Moda Gel-Bnd",
					imageLink: "/images/products/Gel_Bnd.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "tellenzi 4221.",
					color: "Café Claro",
					size: "40.5",
					price: 68.98,
					brand: "Tellenzi",
					model: "4221",
					gender: "Hombre",
					type: "Formales",
					description: "Zapato formales hombre miel tellenzi 4221.",
					imageLink: "/images/products/tellenzi_4221.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "soft preto",
					color: "Negro",
					size: "39.5",
					price: 50.32,
					brand: "Sollu",
					model: "31902-sp",
					gender: "Hombre",
					type: "Zapatos formales",
					description: "Zapatos sollu napoles soft preto",
					imageLink: "/images/products/soft_preto.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "phantom",
					color: "Negro",
					size: "40",
					price: 98.47,
					brand: "Nike",
					model: "Ck8460-060",
					gender: "Hombre",
					type: "Deportivo",
					description: "Guayos nike hombre phantom",
					imageLink: "/images/products/Guayos_phantom.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Running Dario",
					color: "Gris",
					size: "40.9",
					price: 45.79,
					brand: "Fratta",
					model: "DARIO GR",
					gender: "Hombre",
					type: "Tenis",
					description: "Tenis Fratta Hombre Running Dario",
					imageLink: "/images/products/Fratta_Running_Dario.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Skate Old Skool",
					color: "Negro",
					size: "40.5",
					price: 67.45,
					brand: "Vans",
					model: "VN000D3HY28",
					gender: "Unisex",
					type: "Tenis",
					description: "Tenis Vans Unisex Skate Old Skool",
					imageLink: "/images/products/Skate_Old_Skool.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Outdoor Bontynalt",
					color: "Negro",
					size: "40",
					price: 67.43,
					brand: "Mountain Gear",
					model: "BONTYNALT NE",
					gender: "Hombre",
					type: "Outdoor",
					description: "Tenis Mountain Gear Hombre Outdoor Bontynalt",
					imageLink: "/images/products/Outdoor_Bontynalt.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("products", null, {});
	},
};

// {
// 	name: "",
// 	color: "",
// 	size: "",
// 	price: "",
// 	brand: "",
// 	model: "",
// 	gender: "",
// 	type: "",
// 	description: "",
// 	imageLink: "/images/products/",
// createdAt: new Date(),
// updatedAt: new Date(),
// },
