import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Transaction} from "../../model/Transaction";
import {ServiceResponse} from "../../model/ServiceResponse";
import {TransactionsProvider} from "../../providers/transactions/transactions";


@Component({
  selector: 'transaction-item',
  templateUrl: 'transaction-item.html'
})
export class TransactionItemComponent {

  @Input() transaction: Transaction;

  @Input() trxId: number;

  @Input() reasonEnabled: boolean;

  @Output() transactionClicked = new EventEmitter<void>();

  constructor(public transactionService: TransactionsProvider) {
  }

  ngAfterViewInit() {
    if(!this.transaction) {
      console.log(this.trxId);
      this.loadTrx();
    }
  }

  async loadTrx(ev?) {
    if(ev) {
      ev.preventDefault();
    }
    if(!this.trxId) {
      this.trxId = this.transaction.id;
    }
    await this.transactionService.loadTransaction(this.trxId);
    console.log("trx", this.transactionService.selectedTransaction);
    this.transaction = this.transactionService.selectedTransaction;
  }

  selectTransaction() {
    this.transactionClicked.emit();
  }

}
