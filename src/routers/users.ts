import { Router } from "express";

const usersRouter = Router();

usersRouter.get("/", (_req, res) => res.json("hello user"));

export default usersRouter;
