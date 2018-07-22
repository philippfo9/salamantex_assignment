import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserProfileComponent} from "./user";
import {ComponentsModule} from "../../components/components.module";

@NgModule({
	declarations: [
		UserProfileComponent
	],
	imports: [
		IonicPageModule.forChild(UserProfileComponent),
    ComponentsModule
	],
	exports: [],
	providers: []
})
export class UserComponentModule {}
