import {
  ExtractJwt,
  Strategy as JwtStrategy,
  StrategyOptionsWithoutRequest,
} from "passport-jwt";
import { prisma } from "../../lib/prisma";

const OPTIONS: StrategyOptionsWithoutRequest = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: String(process.env.SECRET),
};

export const jwtStrategy = new JwtStrategy(
  OPTIONS,
  async (jwtPayload, done) => {
    try {
      const user = await prisma.user.findUnique({
        where: { id: jwtPayload.sub },
      });

      if (user) return done(null, user);
      else return done(null, false);
    } catch (error) {
      done(error);
    }
  },
);
