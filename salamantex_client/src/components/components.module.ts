import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login';
import {RegisterComponent} from "./register/register";
import {IonicModule} from "ionic-angular";
import {CommonModule} from "@angular/common";
import { InputDisabledComponent } from './input-disabled/input-disabled';
import { TransactionItemComponent } from './transaction-item/transaction-item';
import { LoadingComponent } from './loading/loading';
@NgModule({
	declarations: [LoginComponent,
                 RegisterComponent,
    InputDisabledComponent,
    TransactionItemComponent,
    LoadingComponent],
	imports: [IonicModule, CommonModule],
	exports: [LoginComponent,
            RegisterComponent,
    InputDisabledComponent,
    TransactionItemComponent,
    LoadingComponent]
})
export class ComponentsModule {}
