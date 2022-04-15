import { Router } from "express";

import productGetController from "./product/get"
import bundleController from "./bundle/index";

const router = Router();

/*
 * Routes
 */

// Bundle
router.use("/", bundleController);
// Product.
router.use("/product", productGetController);

export default router;
