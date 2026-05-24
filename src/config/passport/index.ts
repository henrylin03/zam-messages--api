import passport from "passport";
import { localStrategy } from "./localStrategy";
import { jwtStrategy } from "./jwtStrategy";

passport.use(localStrategy);
passport.use(jwtStrategy);

export default passport;
