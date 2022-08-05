import express from "express";
import { list, add, read, remove, update } from "../controller/product";

const router = express.Router();

router.get("/product", list);
router.get("/product/:id", read);
router.post("/products", add);
router.delete("/products/:id", remove);
router.patch("/products/:id", update);

export default router;