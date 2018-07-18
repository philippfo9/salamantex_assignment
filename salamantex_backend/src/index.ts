import "reflect-metadata";
import {createConnection} from "typeorm";
import {Config} from "./config/config";
import {Utils} from "./tools/utils";
import {TransactionProcessor} from "./domain/transaction-processor";
import {app, initRoutes} from "./app";
import "./config/passport";

const transactionProcessor = new TransactionProcessor();
export {transactionProcessor};


Utils.web3 = Utils.setupWeb3();

createConnection(Config.connectionConfig).then(async connection => {

    transactionProcessor.start();

    initRoutes();

}).catch(error => {
    console.log("err", error)
});

