import { Injectable } from '@angular/core';
import {HttpServiceProvider} from "../http-service/http-service";
import {Transaction} from "../../model/Transaction";
import {ServiceResponse} from "../../model/ServiceResponse";
import {TransactionsProvider} from "../transactions/transactions";
import {UserProvider} from "../user/user";
import {plainToClass} from "class-transformer";



@Injectable()
export class SubmitTransactionProvider {

  //normally fetch from backend
  currencies = [{
    name: "Ethereum"
  }, {
    name: "Bitcoin"
  }];

  transactionToSubmit: any = new Transaction();

  constructor(public httpService: HttpServiceProvider, public transactionService: TransactionsProvider, public userService: UserProvider) {
    console.log('Hello SubmitTransactionProvider Provider');
    this.transactionToSubmit.currency = "Ethereum";
  }

  async submitTransaction() {
    if(this.balanceHighEnough() && this.amountSmallerMaximalTransactionAmount() && this.currencyAccountExists()) {
      console.log("submitting transaction");
      let res: ServiceResponse = <ServiceResponse> await this.httpService.postRequest("auth", "/transactions", this.transactionToSubmit, true, true);
      if(res && res.success) {
        res.body.source = this.userService.user;
        res.body.target = {
          publicIdentifier: this.transactionToSubmit.targetPublicId
        };
        this.transactionService.selectedTransaction = plainToClass(Transaction, res.body as Transaction);
        return res.body.id
      }
    }
  }

  balanceHighEnough() {
    return this.transactionToSubmit.amount < this.userService.user.getBalanceByCurrency(this.transactionToSubmit.currency);
  }

  amountSmallerMaximalTransactionAmount() {
    return this.transactionToSubmit.amount < this.userService.user.maximumAmountPerTransaction;
  }

  currencyAccountExists() {
    return this.userService.user.walletExistsForCurrency(this.transactionToSubmit.currency)?true:false;
  }

}
