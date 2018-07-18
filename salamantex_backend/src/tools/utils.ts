import * as WaValidator from "wallet-address-validator";
import {Injectable} from "injection-js";
import Web3 = require("web3");
import * as request from "request";
import {TransactionDomain} from "../domain/transactions";
import {Currency} from "../entity/Currency";
import {Transaction} from "../entity/Transaction";
import {User} from "../entity/User";

export class Utils {
    static web3;

    static async getEthereumBalance(ethAddress) {
        console.log("in here");
        if(WaValidator.validate(ethAddress, 'ETH')) {
            let balance = await this.web3.eth.getBalance(ethAddress);
            return this.web3.utils.fromWei(balance, "ether");
        } else {
            console.log("not valid");
        }
    }

    static getBitcoinBalance(btcAddress) {
        return new Promise((resolve, reject) => {
            if(WaValidator.validate(btcAddress, 'BTC')) {
                request.get("https://blockchain.info/q/addressbalance/1M2crFuKHKiH34k7Mga5Nqh4hk832xtTDj",
                    (err, res, body) => {
                        if(err) reject(err);
                        if(res.statusCode == 200) {
                            resolve(this.convertSatoshiToBtc(body));
                        } else {
                            reject("request failed");
                        }
                    });
            }
        });
    }

    static validateAddress(address, type) {
        return WaValidator.validate(address, type);
    }

    static setupWeb3() {
        let testnet: string = 'https://ropsten.infura.io/';
        return new Web3(new Web3.providers.HttpProvider(testnet));
    }

    static convertSatoshiToBtc(sat) {
        return sat/100000000;
    }

    static async createMockData() {
        let user1 = await User.findOne(2);
        user1.email = "blabla@bla.com";
        user1.ethereumWalletID = "blabla";
        user1.ethereumBalance = 5;
        await User.save(user1);
        console.log(user1);

        let user2 = await User.findOne(1);
        user2.email = "albalb@bla.com";
        user2.ethereumWalletID = "albalb";
        user2.ethereumBalance = 4.5;
        await User.save(user2);

        console.log("creating transaction");
        let transaction = new Transaction();
        transaction.currency = Currency.eth;
        transaction.amount = 0.35;
        transaction.source = user2;
        transaction.target = user1;

        TransactionDomain.submitTransaction(transaction);

    }
}

