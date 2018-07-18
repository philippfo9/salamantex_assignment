import * as express from "express";
import * as bodyParser from "body-parser";
import helmet = require("helmet");
import * as passport from "passport";
import {protectedRoutes, unprotectedRoutes} from "./routes/routes";


const app = express();

export function initRoutes() {
    app.use(bodyParser.json());
    app.use(helmet());

    app.use("/api", unprotectedRoutes);
    app.use("/auth", passport.authenticate("jwt", {session: false}), protectedRoutes);

    app.get("/", (req, res) => {
        res.send("hi");
    });

    app.listen(3000);
    console.log("listening on port 3000");
}



export{app};