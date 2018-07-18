import {getTransactionsByUser} from "../queries/transaction-queries";
import {Transaction} from "../entity/Transaction";
import {getConnection, Repository} from "typeorm";
import {Injectable} from "injection-js";
import {TransactionState} from "../entity/TransactionState";
import {transactionProcessor} from "../index";
import {CustomError} from "../tools/CustomError";
import {User} from "../entity/User";

@Injectable()
export class TransactionDomain {
    public static transactionRepository: Repository<Transaction> = null;
    public static trxByUser(userId) {
        if(!this.transactionRepository) TransactionDomain.transactionRepository = getConnection().manager.getRepository(Transaction);
        return getTransactionsByUser(userId);
    }

    public static getTrxById(trxId) {
        if(!this.transactionRepository) TransactionDomain.transactionRepository = getConnection().manager.getRepository(Transaction);
        return this.transactionRepository.findOne(trxId);
    }

    public static async saveTransaction(transaction: Transaction) {
        if(!this.transactionRepository) TransactionDomain.transactionRepository = getConnection().manager.getRepository(Transaction);
        await this.transactionRepository.save(transaction);
        return transaction;
    }

    public static async submitTransaction(transaction: Transaction) {
        if(!Transaction.hasId(transaction)) {
            let targetUser = await User.findOne({publicIdentifier: transaction.targetPublicId});
            if(!targetUser) throw new CustomError(422, "Empfänger konnte nicht gefunden werden");
            transaction.target = targetUser;
            transaction.targetId = targetUser.id;
            transaction.state = TransactionState.PROCESSING;
            await this.saveTransaction(transaction);
            transactionProcessor.addTransaction(transaction);
            return transaction;
        } else {
            throw new CustomError(422, "Transaktionen können nicht bearbeitet werden");
        }

    }
}