import { Router } from "express";
import UserController from "../controllers/UserController.js";

const router = Router();

router.get("/userTeste", UserController.teste);

export default router;