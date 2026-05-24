import passport from "../../config/passport";
import { createJwt } from "./createJwt";

export const loginPost = [
  passport.authenticate("local", { session: false }),
  createJwt,
];
