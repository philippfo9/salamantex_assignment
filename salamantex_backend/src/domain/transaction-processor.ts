import BeeQueue = require("bee-queue");
import {Transaction} from "../entity/Transaction";
import {TransactionDomain} from "./transactions";
import {UsersDomain} from "./users";
import {Currency} from "../entity/Currency";
import {TransactionState} from "../entity/TransactionState";
import {CustomError} from "../tools/CustomError";
import {User} from "../entity/User";

export class TransactionProcessor {
    transactionQueue: BeeQueue;

    async start() {
        console.log("transactionqueue started");
        this.transactionQueue.process((job, done) => {
            console.log("processing job", job.id);
            this.processTransaction(job.data);
            done(null);
        })
    }

    addTransaction(transaction: Transaction) {
        console.log("adding transaction in processor");
        let trxJob = this.transactionQueue.createJob(transaction);
        trxJob.save();
    }

    private async processTransaction(transaction: Transaction) {
        let sourceUser = await UsersDomain.getUser(transaction.sourceId);
        let targetUser = await UsersDomain.getUser(transaction.targetId);
        sourceUser.processUserAfterRead();
        targetUser.processUserAfterRead();

        if(!this.validateUsersBeforeTransactionAndAdjust(transaction, sourceUser, targetUser))
            transaction.state = TransactionState.CANCELED;

        TransactionDomain.saveTransaction(transaction);
        UsersDomain.saveUser(sourceUser);
        UsersDomain.saveUser(targetUser);
        return transaction;
    }

    private validateUsersBeforeTransactionAndAdjust(transaction: Transaction, sourceUser: User, targetUser: User) {
        transaction.amount = Number(transaction.amount);
        //more currencies -> user with decorator pattern with currency accounts
        if(sourceUser.maximumAmountPerTransaction > transaction.amount && targetUser.maximumAmountPerTransaction > transaction.amount) {
            if(transaction.currency == Currency.eth) {
                if(sourceUser.ethereumWalletID !== null && sourceUser.ethereumBalance > transaction.amount && targetUser.ethereumWalletID) {
                    sourceUser.ethereumBalance = sourceUser.removeAmountFromBalance(sourceUser.ethereumBalance, transaction.amount);
                    targetUser.ethereumBalance = sourceUser.addAmountToBalance(targetUser.ethereumBalance, transaction.amount);
                    transaction.state = TransactionState.FINISHED;
                    return true;
                }
            } else {
                if(sourceUser.bitcoinWalletID != null && sourceUser.bitcoinBalance > transaction.amount && targetUser.bitcoinWalletID) {
                    sourceUser.bitcoinBalance = sourceUser.removeAmountFromBalance(sourceUser.bitcoinBalance, transaction.amount);
                    targetUser.bitcoinBalance = sourceUser.addAmountToBalance(targetUser.bitcoinBalance, transaction.amount);
                    return true;
                }
            }
            transaction.cancelReason = "Konto existiert nicht oder Kontostand ist kleiner als Transaktionsmenge";
        }
        if(!transaction.cancelReason)
            transaction.cancelReason = "Transaktionsmenge überschreitet maximale Transaktionsmenge";
        return false;
    }


    constructor() {
        this.transactionQueue = new BeeQueue("transaction-queue");
    }
}