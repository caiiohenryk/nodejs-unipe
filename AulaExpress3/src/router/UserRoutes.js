import { Router } from "express";
import UserController from "../controllers/UserController.js";

const router = Router();

router.get("/usuarios", UserController.findAll);
router.get("/usuarios/:id", UserController.findById);
router.post("/usuarios", UserController.sendUser);

export default router;