import { newUserPost } from "../controllers/users";
import { Router } from "express";

const usersRouter = Router();

usersRouter.get("/", (_req, res) => res.json({ msg: "hello user" }));
usersRouter.post("/new", ...newUserPost);

export default usersRouter;
