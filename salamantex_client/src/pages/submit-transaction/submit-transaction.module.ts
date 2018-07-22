import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubmitTransactionComponent} from "./submit-transaction";

@NgModule({
	declarations: [
		SubmitTransactionComponent
	],
	imports: [
		CommonModule,
		IonicPageModule.forChild(SubmitTransactionComponent)
	],
	exports: [],
	providers: []
})
export class TransactionComponentModule {}
