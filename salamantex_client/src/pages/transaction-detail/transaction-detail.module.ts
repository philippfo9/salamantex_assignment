import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransactionDetailPage } from './transaction-detail';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    TransactionDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TransactionDetailPage),
    ComponentsModule
  ],
})
export class TransactionDetailPageModule {}
