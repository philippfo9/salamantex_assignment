import {Request, Response} from "express";
import {getConnection, Repository} from "typeorm";
import {Transaction} from "../entity/Transaction";
import {TransactionDomain} from "../domain/transactions";


export class TransactionRoutes {
    async getTransactionById(req: Request, res: Response) {
        return this.transactionDomain.getTrxById(req.params.id);
    }

    async getTransactionsByUser(req: Request, res: Response) {
        return this.transactionDomain.trxByUser(req.params.userId);
    }


    constructor(public transactionDomain: TransactionDomain) {

    }
}

