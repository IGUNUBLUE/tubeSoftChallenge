import { Router } from "express";

import productGetController from "./products/get"

const router = Router();

/*
 * Routes
 */

// Product.
router.use("/products", productGetController);

export default router;
