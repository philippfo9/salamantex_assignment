import BeeQueue = require("bee-queue");
import {Transaction} from "../entity/Transaction";
import {TransactionDomain} from "./transactions";
import {UsersDomain} from "./users";
import {Currency} from "../entity/Currency";
import {TransactionState} from "../entity/TransactionState";
import {CustomError} from "../tools/CustomError";

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
        //more currencies -> user with decorator pattern with currency accounts
        if(sourceUser.maximumAmountPerTransaction > transaction.amount && targetUser.maximumAmountPerTransaction > transaction.amount) {
            if(transaction.currency == Currency.eth) {
                if(sourceUser.ethereumWalletID !== null && sourceUser.ethereumBalance > transaction.amount && targetUser.ethereumWalletID) {
                    sourceUser.ethereumBalance = sourceUser.removeAmountFromBalance(sourceUser.ethereumBalance, transaction.amount);
                    targetUser.ethereumBalance = sourceUser.addAmountToBalance(targetUser.ethereumBalance, transaction.amount);
                    transaction.state = TransactionState.FINISHED;
                }
            } else {
                if(sourceUser.bitcoinWalletID != null && sourceUser.bitcoinBalance > transaction.amount && targetUser.bitcoinWalletID) {
                    sourceUser.bitcoinBalance = sourceUser.removeAmountFromBalance(sourceUser.bitcoinBalance, transaction.amount);
                    targetUser.bitcoinBalance = sourceUser.addAmountToBalance(targetUser.bitcoinBalance, transaction.amount);
                    transaction.state = TransactionState.FINISHED;
                }
            }
        }


        if(transaction.state != TransactionState.FINISHED)
            transaction.state = TransactionState.CANCELED;

        TransactionDomain.saveTransaction(transaction);
        UsersDomain.saveUser(sourceUser);
        UsersDomain.saveUser(targetUser);
        console.log("transaction processed", transaction);
        return transaction;
    }


    constructor() {
        this.transactionQueue = new BeeQueue("transaction-queue");
    }
}