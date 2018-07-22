import { Injectable } from '@angular/core';
import {Transaction} from "../../model/Transaction";
import {HttpServiceProvider} from "../http-service/http-service";
import {ServiceResponse} from "../../model/ServiceResponse";
import {plainToClass} from "class-transformer";
import {UserProvider} from "../user/user";

@Injectable()
export class TransactionsProvider {

  transactions: Transaction[] = [];
  selectedTransaction: Transaction;

  constructor(public httpService: HttpServiceProvider, public userService: UserProvider) {

  }

  async loadUserTransactions() {
    if(this.userService.profileLoading) {
      await this.userService.userProfile$;
    }
    let res: ServiceResponse = <ServiceResponse> await this.httpService.getRequest("api", `/users/${this.userService.user.id}/transactions`, true, true);
    if(res && res.success) {
      let transactions = res.body;
      for(let trx of transactions) {
        if(trx.sourceId == this.userService.user.id)
          trx.source = this.userService.user;
        else
          trx.source = await this.loadUserFromTransaction(trx.sourceId);

        if(trx.targetId == this.userService.user.id)
          trx.target = this.userService.user;
        else
          trx.target = await this.loadUserFromTransaction(trx.targetId);
      }
      transactions.reverse();
      this.transactions = plainToClass(Transaction, res.body as Transaction[]);
      return true;
    }
  }

  async loadUserFromTransaction(userId) {
    let res: ServiceResponse = <ServiceResponse> await this.httpService.getRequest("api", `/user/${userId}`, true, false);
    if(res && res.success) {
      return res.body;
    }
  }

  async loadTransaction(transactionId: number) {
    let res: ServiceResponse = <ServiceResponse> await this.httpService.getRequest("api", "/transactions/"+transactionId, true, true);
    if(res && res.success) {
      let trx = res.body;
      trx.source = await this.loadUserFromTransaction(trx.sourceId);
      trx.target = await this.loadUserFromTransaction(trx.targetId);
      this.selectedTransaction = plainToClass(Transaction, trx as Transaction);
      return true;
    }
  }

}
