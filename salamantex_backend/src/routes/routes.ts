import {Application} from "express";
import {TransactionRoutes} from "./transactions";
import {TransactionDomain} from "../domain/transactions";


export class Routes {
    transactionRoutes: TransactionRoutes;
    assignRoutes(app: Application) {
        app.get("/transactions/:id", this.transactionRoutes.getTransactionById);

        app.get("/users/:userId/transactions", this.transactionRoutes.getTransactionsByUser);



    }

    constructor() {
        this.transactionRoutes = new TransactionRoutes(new TransactionDomain())
    }
}
