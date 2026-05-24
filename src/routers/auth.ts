import { Router } from "express";
import { loginPost, validateJwtGet } from "../controllers/auth";

const authRouter = Router();

authRouter.post("/login", loginPost);
authRouter.get("/validate", validateJwtGet);

export default authRouter;
