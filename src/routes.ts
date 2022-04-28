import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateProductController } from "./controllers/CreateProductController";
import { FindProductController } from "./controllers/FindProductController";

const router = Router();

const createProductController = new CreateProductController();

router.post("/product", createProductController.handler);

const findProductController = new FindProductController();

router.get("/product/:id", findProductController.handler);

const createCategoryController = new CreateCategoryController();

router.post("/category", createCategoryController.handler);

export { router };
