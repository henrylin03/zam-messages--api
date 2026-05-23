import { Request, Response } from "express";

export const loginPost = (req: Request, res: Response) => {
  res.json("you have attempted to login");
};
