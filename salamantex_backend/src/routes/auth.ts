import {CustomError} from "../tools/CustomError";
import {Request, Response} from "express";
import * as passport from "passport";
import * as jwt from "jsonwebtoken";
import {jwtsecret} from "../config/config";
import {User} from "../entity/User";
import {UsersDomain} from "../domain/users";

export class Auth {
    static async login(req: Request, res: Response) {
        passport.authenticate("local", (err, user, info) => {
            if(err || !user) {
                throw new CustomError(422, "Email oder Passwort ist inkorrekt");
            }
            req.login(user, {session: false}, (err) => {
                if(err) {res.send(err);}
                delete user.password;
                let token = jwt.sign(Object.assign({}, user), jwtsecret);
                res.send({token: token});
            })
        })(req, res);
    }

    static async register(req: Request, res: Response) {
        let newUser: User = req.body;

        if(!newUser.password)
            throw new CustomError(422, "Für die Registrierung wird ein Passwort benötigt");

        newUser.password = <string> await User.hashPassword(newUser.password);
        res.send(await UsersDomain.saveUser(newUser));
    }
}