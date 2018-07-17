import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import {Transaction} from "./entity/Transaction";
//import {UserTransaction} from "./entity/UserTransaction";
import {TransactionState} from "./entity/TransactionState";
import {Currency} from "./entity/Currency";
import {Config} from "./config/config";
import {getTransactionsByUser} from "./queries/transaction-queries";
import * as express from "express";

createConnection(Config.connectionConfig).then(async connection => {


    await createMockData();
    console.log("Connection initialized...");

    getTransactionsByUser(1);


    
}).catch(error => console.log(error));


/*async function test() {
    let user1 = await User.findOne(1);

    let user2 = await User.findOne(3);


    console.log("creating user transactions");
    let userTransaction1 = new UserTransaction();
    let userTransaction2 = new UserTransaction();

    userTransaction1.user = user1;
    userTransaction1.from = true;

    userTransaction2.user = user2;
    userTransaction2.from = false;

    console.log("creating transaction");
    let transaction = new Transaction();
    transaction.currency = Currency.eth;
    transaction.state = TransactionState.PROCESSING;
    transaction.amount = 0.87;
    transaction.users = [userTransaction1, userTransaction2];

    console.log("before saving");
    await Transaction.save(transaction);
}*/


async function createMockData() {
    let user1 = await User.findOne(1);

    let user2 = await User.findOne(2);

    console.log("creating transaction");
    let transaction = new Transaction();
    transaction.currency = Currency.eth;
    transaction.state = TransactionState.PROCESSING;
    transaction.amount = 0.87;
    transaction.source = user2;
    transaction.target = user1;

    console.log("before saving");
    await Transaction.save(transaction);

}
