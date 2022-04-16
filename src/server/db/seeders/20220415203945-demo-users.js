// eslint-disable-next-line strict
"use strict";

module.exports = {
	async up(queryInterface) {
		await queryInterface.bulkInsert(
			"users",
			[
				{
					name: "John",
					lastName: "Doe",
					email: "jhon.doe@challenge.tubesoft",
					password: "1a2b3c",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Tomas",
					lastName: "Morales",
					email: "tomas.morales@challenge.tubesoft",
					password: "1122aabb",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Lenin",
					lastName: "Garizablo",
					email: "lenin.doe@challenge.tubesoft",
					password: "1a2b3c",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("People", null, {});
	},
};
