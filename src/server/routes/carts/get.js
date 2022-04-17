import { Router } from "express";
import sequelize from "../../db";

let router = Router();
const { Carts } = sequelize.models;

router.get("/", async (req, res) => {
	try {
		const carts = await Carts.findAll();

		if (carts.length) {
			return res.status(200).json(carts);
		}

		return res.status(204).json({ message: "The request did not find results"  });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal server error", status: 500 });
	}
});

export default router;
