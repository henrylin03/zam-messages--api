import { Request, Response } from "express";
import passport from "../lib/passport";

export const loginPost = [
  passport.authenticate("local", { session: false }),
  (req: Request, res: Response) => {
    const { id, email, firstName, lastName } = req.user;
    res.json({
      user: { id, email, firstName, lastName },
    });
  },
];
