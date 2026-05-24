import { IStrategyOptions, Strategy as LocalStrategy } from "passport-local";
import { prisma } from "../../lib/prisma";
import bcrypt from "bcryptjs";

const OPTIONS: IStrategyOptions = {
  usernameField: "email",
  session: false,
};

export const localStrategy = new LocalStrategy(
  OPTIONS,
  async (username, password, done) => {
    try {
      const user = await prisma.user.findUnique({ where: { email: username } });
      if (!user) return done(null, false);

      const isCorrectPassword = await bcrypt.compare(password, user.password);
      if (!isCorrectPassword) return done(null, false);

      return done(null, user);
    } catch (error) {
      done(error);
    }
  },
);
