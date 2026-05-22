import { Request, Response } from "express";
import { validateNewUser } from "./validateNewUser";

export const newUserPost = [
  validateNewUser,
  async (req: Request, res: Response) => {
    return;
  },
];
