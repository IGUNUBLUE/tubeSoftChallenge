import { Router } from "express";
import sequelize from "../../db";

let router = Router();
const { Carts, Products } = sequelize.models;

router.get("/:userId", async (req, res) => {
	try {
		const { userId } = req.params;
		const carts = await Carts.findAll({
			where: {
				userId,
			},
			attributes: {
				exclude: ["createdAt", "updatedAt"],
			},
			include: {
				model: Products,
				attributes: {
					exclude: ["createdAt", "updatedAt"],
				},
			},
		});

		if (carts.length) {
			return res.status(200).json(carts);
		}

		return res.status(200).json([]);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal server error", status: 500 });
	}
});

export default router;
