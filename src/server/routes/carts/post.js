import { Router } from "express";
import sequelize from "../../db";

let router = Router();
const { Carts } = sequelize.models;

router.post("/create", async (req, res) => {
	try {
		if (
			req.body.state &&
			req.body.paymentState &&
			!Number.isNaN(req.body.total) &&
			!Number.isNaN(req.body.userId) &&
			!Number.isNaN(req.body.price) &&
			req.body.isCurrent &&
			!Number.isNaN(req.body.productId)
		) {
			const {
				state,
				paymentState,
				total,
				userId,
				isCurrent,
				productId,
				price,
			} = req.body;

			const carts = await Carts.create({
				isCurrent,
				state,
				paymentState,
				total,
				userId,
			});

			carts.addProducts(productId, {
				through: { price, quantity: 1 },
			});

			return res.status(200).json(carts);
		}

		return res.status(400).json({});
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal server error", status: 500 });
	}
});

export default router;
