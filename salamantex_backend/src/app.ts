import * as express from "express";
import * as bodyParser from "body-parser";
import helmet = require("helmet");
import * as passport from "passport";
import {protectedRoutes, unprotectedRoutes} from "./routes/routes";
import {Request, Response} from "express";
import {CustomError} from "./tools/CustomError";


const app = express();

export function initRoutes() {
    app.use(bodyParser.json());
    app.use(helmet());
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");

        if(req.method == "OPTIONS")
            res.sendStatus(200);
        else
            next();
    });

    app.use("/api", unprotectedRoutes);
    app.use("/auth", passport.authenticate("jwt", {session: false}), protectedRoutes);

    app.get("/", (req, res) => {
        res.send("hi");
    });

    app.listen(3000);

    app.use((err: any, req: Request, res: Response, next: any) => {
        console.log("err", err);
        if(err instanceof CustomError) {
            let customError: CustomError = err;
            res.status(customError.statusCode);
            res.json({message: customError.message});
            return;
        }

        res.sendStatus(500);
    });
}



export{app};