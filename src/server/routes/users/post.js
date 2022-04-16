import { Router } from "express";
import sequelize from "../../db";

let router = Router();
const { Users } = sequelize.models;

router.post("/", async (req, res) => {
	try {
		const user = await Users.findOne({
			where: {
				email: req.body.email,
				password: req.body.password,
			},
		});

		if (user === null) {
			return res.status(200).json({ message: "user found" });
		} else {
			return res.status(200).json(user);
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal server error", status: 500 });
	}
});

export default router;
