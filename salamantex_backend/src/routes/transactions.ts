import {Request, Response} from "express";
import {getConnection, Repository} from "typeorm";
import {Transaction} from "../entity/Transaction";
import {TransactionDomain} from "../domain/transactions";
import {TransactionState} from "../entity/TransactionState";
import {transactionProcessor} from "../index";


export class TransactionRoutes {
    static async getTransactionById(req: Request, res: Response) {
        res.send(await TransactionDomain.getTrxById(req.params.id));
    }

    static async getTransactionsByUser(req: Request, res: Response) {
        res.send(await TransactionDomain.trxByUser(req.params.userId));
    }

    static async submitTransaction(req: Request, res: Response) {
        let trx = req.body;
        trx.sourceId = req.user.id;
        trx = await TransactionDomain.submitTransaction(trx);
        console.log("res send trx");
        res.send(trx);
    }
}

