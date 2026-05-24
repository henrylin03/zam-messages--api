import { Request, Response } from "express";
import passport from "../../config/passport";
import { createJwt } from "./createJwt";

export const loginPost = [
  passport.authenticate("local", { session: false }),
  createJwt,
];

export const validateJwtGet = [
  passport.authenticate("jwt", { session: false }),
  (_req: Request, res: Response) => {
    return res.status(200).json({ msg: "JWT ok" });
  },
];
