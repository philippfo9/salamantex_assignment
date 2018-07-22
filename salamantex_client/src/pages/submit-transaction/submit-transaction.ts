import {IonicPage, NavController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Transaction } from "../../model/Transaction";
import { Component } from '@angular/core';
import {MyApp} from "../../app/app.component";
import {SubmitTransactionProvider} from "../../providers/submit-transaction/submit-transaction";
import {StandardsProvider} from "../../providers/standards/standards";
import {UserProvider} from "../../providers/user/user";

@IonicPage({
  segment: 'neue-transaktion'
})
@Component({
	selector: 'submit-transaction',
	templateUrl: 'submit-transaction.html',
})
export class SubmitTransactionComponent {

	TransactionForm: FormGroup;
	submitted = false;

	constructor(public formBuilder: FormBuilder, public myApp: MyApp, public transactionSubmitService: SubmitTransactionProvider,
              public standards: StandardsProvider, public userService: UserProvider, public navCtrl: NavController) {
		this.TransactionForm = this.formBuilder.group({
			amount: [0, Validators.compose([Validators.required, Validators.min(0)])],
			currency: ['', Validators.compose([Validators.required])],
			target: ['', Validators.compose([Validators.required, Validators.pattern(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i)])],
		});
	}

  ionViewDidEnter() {
    this.myApp.setPageActive("SubmitTransactionComponent");
  }

  async confirmTransaction() {
	  this.submitted = true;
	  if(this.TransactionForm.valid) {
      let trxId = await this.transactionSubmitService.submitTransaction();
      if(trxId) {
        this.standards.showToast("Transaktion wurde erfolgreich zur Überprüfung eingereicht", 3000, ()=>{});
        this.navCtrl.push("TransactionDetailPage", {
          id: trxId
        })
      }
    }
  }




}
