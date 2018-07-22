import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MyApp} from "../../app/app.component";
import {TransactionsProvider} from "../../providers/transactions/transactions";
import {UserProvider} from "../../providers/user/user";
import {LoadingStateProvider} from "../../providers/loading-state/loading-state";

@IonicPage({
  segment: "transaktionen"
})
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public myApp: MyApp,
              public transactionService: TransactionsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionsPage');
  }

  ionViewDidEnter() {
    this.myApp.setPageActive("TransactionsPage");
    this.transactionService.loadUserTransactions();
  }

  selectTransaction(transaction) {
    this.transactionService.selectedTransaction = transaction;
    this.navCtrl.push("TransactionDetailPage", {id: transaction.id});
  }

}
