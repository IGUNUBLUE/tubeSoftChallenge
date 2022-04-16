import { Router } from "express";

import productGetController from "./products/get"
import userPostController from "./users/post"

const router = Router();

/*
 * Routes
 */

// Product.
router.use("/products", productGetController);
// User
router.use("/users", userPostController);

export default router;
