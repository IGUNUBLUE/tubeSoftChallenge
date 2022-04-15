import { Router } from "express";
import { sequelize } from "../../db";

let router = Router();
const { Product } = sequelize.models;

router.get("/", async (req, res) => {
	try {
		const products = await Product.findAll();
		console.log(products);

		if (products === null) {
			return res
				.status(200)
				.json({ message: "No products in the data base", status: 200 });
		} else {
			return res.status(200).json(products);
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal server error", status: 500 });
	}
});

export default router;
