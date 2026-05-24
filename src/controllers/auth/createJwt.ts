import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const createJwt = (req: Request, res: Response) => {
  const JWT_EXPIRATION = "24h";

  const { user } = req;
  if (!user) return res.status(500).json({ msg: "Auth failed" });

  const secret = process.env.SECRET;
  if (!secret) throw new Error("Please add 'SECRET' variable in .env file");

  const token = jwt.sign({ sub: user.id }, secret, {
    expiresIn: JWT_EXPIRATION,
  });

  return res.status(200).json({ msg: "Auth ok", token });
};
