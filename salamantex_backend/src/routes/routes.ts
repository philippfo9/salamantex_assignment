import {Application} from "express";
import {TransactionRoutes} from "./transactions";
import {Auth} from "./auth";
import Router from "express-promise-router";
import {UserRoutes} from "./users";


const unprotectedRoutes = Router();
const protectedRoutes = Router();


unprotectedRoutes.get("/transactions/:id", TransactionRoutes.getTransactionById);

unprotectedRoutes.get("/users/:userId/transactions", TransactionRoutes.getTransactionsByUser);

unprotectedRoutes.post("/login", Auth.login);

unprotectedRoutes.post("/register", Auth.register);

unprotectedRoutes.get("/user/:id", UserRoutes.getBasicUserProfile);

protectedRoutes.get("/user", UserRoutes.getUserProfile);

protectedRoutes.post("/user/:id", UserRoutes.updateUser);

protectedRoutes.post("/transactions", TransactionRoutes.submitTransaction);

export{protectedRoutes, unprotectedRoutes};