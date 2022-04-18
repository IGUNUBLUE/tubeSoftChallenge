import { Router } from "express";

import productGetController from "./products/get"
import userPostController from "./users/post"
import cartGetController from "./carts/get"
import cartPostController from "./carts/post"

const router = Router();

/*
 * Routes
 */

// Product.
router.use("/products", productGetController);
// User
router.use("/users", userPostController);
// Cart
router.use("/carts", cartGetController);
router.use("/carts", cartPostController);

export default router;
