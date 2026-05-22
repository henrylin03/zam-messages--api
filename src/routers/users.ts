import { Router } from "express";

const usersRouter = Router();

usersRouter.get("/", (_req, res) => res.json({msg: "hello user"}));

export default usersRouter;
