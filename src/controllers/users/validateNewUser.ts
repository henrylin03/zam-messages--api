import { prisma } from "@/lib/prisma";
import { body } from "express-validator";

export const validateNewUser = [
  body("email")
    .trim()
    .isEmail()
    .withMessage("Enter a valid email address")
    .isLength({ max: 256 })
    .withMessage("Email address must be max 256 characters")
    .custom(async (input) => {
      const user = await prisma.user.findUnique({ where: { email: input } });
      if (user) throw new Error("Email is already in use");
    }),
];
