import { Router } from "express";
import sequelize from "../../db";

let router = Router();
const { Products } = sequelize.models;

router.get("/", async (req, res) => {
	try {
		const products = await Products.findAll();

		if (products.length) {
			return res.status(200).json(products);
		}

		return res.status(200).json([]);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal server error", status: 500 });
	}
});

export default router;
