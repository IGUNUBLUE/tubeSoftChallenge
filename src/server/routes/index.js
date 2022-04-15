import { Router } from "express";

import productGetController from "./product/get"

const router = Router();

/*
 * Routes
 */

// Product.
router.use("/product", productGetController);

export default router;
