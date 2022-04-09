import { Router } from "express";

const router = Router();

import  productGetController from "./product/get"

// Routes #####################################################################
// Product.
router.use("/product", productGetController);

export default router;
