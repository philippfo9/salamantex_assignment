import {Request, Response} from "express";
import {CustomError} from "../tools/CustomError";
import {User} from "../entity/User";
import {UsersDomain} from "../domain/users";

export class UserRoutes {
    static async getUserProfile(req: Request, res: Response) {
        res.send(await UsersDomain.getUser(req.user.id));
    }

    static async updateUser(req: Request, res: Response) {
        if(req.params.id != req.user.id) { throw new CustomError(403, "Sie können nur Ihre eigenen User-Daten updaten"); }
        let user = req.body;
        res.send(await UsersDomain.updateUser(user));
    }

    static async getBasicUserProfile(req: Request, res: Response) {
        res.send(await UsersDomain.getBasicUser(req.params.id));
    }


}