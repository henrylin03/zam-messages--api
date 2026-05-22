import { newUserPost } from "@/controllers/users";
import { Router } from "express";

const usersRouter = Router();

usersRouter.post("/new", newUserPost);

export default usersRouter;
