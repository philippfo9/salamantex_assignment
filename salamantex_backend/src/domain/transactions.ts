import {getTransactionsByUser} from "../queries/transaction-queries";
import {Transaction} from "../entity/Transaction";
import {getConnection, Repository} from "typeorm";
import {Injectable} from "injection-js";

@Injectable()
export class TransactionDomain {
    public transactionRepository: Repository<Transaction> = null;
    public trxByUser(userId) {
        return getTransactionsByUser(userId);
    }

    public getTrxById(trxId) {
        return this.transactionRepository.findOne(trxId);
    }

    constructor() {
        this.transactionRepository = getConnection().manager.getRepository(Transaction);
    }
}