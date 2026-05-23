import { Router } from "express";
import { loginPost } from "../controllers/auth";

const authRouter = Router();

authRouter.post("/login", loginPost);

export default authRouter;
