import * as passport from "passport";
import * as passportLocal from "passport-local";
import * as passportJwt from "passport-jwt";

import {User} from "../entity/User";
import {CustomError} from "../tools/CustomError";
import {jwtsecret} from "./config";

const localStrategy = passportLocal.Strategy;
const jwtStrategy = passportJwt.Strategy;
const extractJWT = passportJwt.ExtractJwt;

passport.use(new localStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, (email, passwordCandidate, done) => {
        return User.findOne({email: email}).then((user: User) => {
            if(!user)  return done(null, false, {message: "Email oder Passwort ist inkorrekt"});
            User.comparePassword(passwordCandidate, user.password).then(isMatch => {
                if(!isMatch) return done(null, false, {message: "Email oder Passwort ist inkorrekt"});
                return done(null, user, {message: "Login erfolgreich"});
            })
        });
    }
));

passport.use(new jwtStrategy({
        jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: jwtsecret
    }, (jwtPayload, done) => {
        return User.findOne(jwtPayload)
            .then(user => {
                done(null, user);
            })
            .catch(err => {
                done(err);
            })
    })
);