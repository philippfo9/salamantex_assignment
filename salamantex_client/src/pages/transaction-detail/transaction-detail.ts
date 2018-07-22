import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TransactionsProvider} from "../../providers/transactions/transactions";
import {Transaction} from "../../model/Transaction";
import {MyApp} from "../../app/app.component";


@IonicPage({
  segment: 'transaktionen/:id',
  defaultHistory: ['TransactionsPage']
})
@Component({
  selector: 'page-transaction-detail',
  templateUrl: 'transaction-detail.html',
})
export class TransactionDetailPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public transactionService: TransactionsProvider,
              public myApp: MyApp) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionDetailPage');
  }

  ionViewDidEnter() {
    this.myApp.setPageActive("TransactionsPage");
  }

  navigateBackToTransactions() {
    this.navCtrl.setRoot("TransactionsPage");
  }

}
