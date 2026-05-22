import { Request, Response } from "express";
import { validateNewUser } from "./validateNewUser";
import { matchedData, validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma";

export const newUserPost = [
  validateNewUser,
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const formData = matchedData(req);

    const { firstName, lastName, email, password: inputtedPassword } = formData;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(inputtedPassword, salt);

    try {
      const newUser = await prisma.user.create({
        data: { firstName, lastName, email, password: hashedPassword },
      });
      res.status(201).json({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  },
];
