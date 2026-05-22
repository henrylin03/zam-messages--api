import { prisma } from "@/lib/prisma";
import { body } from "express-validator";

type NameInputField = "firstName" | "lastName";

const validateNameField = (fieldName: NameInputField) =>
  body(fieldName)
    .trim()
    .isAlphanumeric("en-AU", { ignore: "- " })
    .withMessage(`${fieldName} must only contain letters, hyphens and spaces`)
    .isLength({ min: 1, max: 30 })
    .withMessage(`${fieldName} must be between 1 and 30 characters`);

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

  validateNameField("firstName"),
  validateNameField("lastName"),
];
