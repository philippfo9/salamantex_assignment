import { IonicPage } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import {User} from "../../model/User";
import {UserProvider} from "../../providers/user/user";
import {MyApp} from "../../app/app.component";

@IonicPage({
  segment: "userprofil"
})
@Component({
	selector: 'edit-user-profile',
	templateUrl: 'user.html',
})
export class UserProfileComponent {
	UserForm: FormGroup;

	editMode = false;

	constructor(public formBuilder: FormBuilder, public userService: UserProvider, public myApp: MyApp) {
    console.log("hey");
    this.UserForm = this.formBuilder.group({
			publicIdentifier: ['', Validators.compose([Validators.required])],
			email: ['', Validators.compose([Validators.required])],
			name: ['', Validators.compose([Validators.required])],
			birthDay: ['', Validators.compose([])],
			description: ['', Validators.compose([])],
			bitcoinWalletID: ['', Validators.compose([])],
			bitcoinBalance: ['', Validators.compose([])],
			ethereumWalletID: ['', Validators.compose([])],
			ethereumBalance: ['', Validators.compose([])],
			maximumAmountPerTransaction: ['', Validators.compose([])],
		});
	}

	activateEditMode() {
	  this.editMode = true;
	  this.userService.activateEdit();
  }

  cancelEditMode() {
	  this.editMode = false;
	  this.userService.cancelEdit();
  }

  async saveUpdates() {
    let success = await this.userService.updateUser();
    if(!success) {
      this.cancelEditMode();
    }
  }

	ionViewDidLoad() {
    this.userService.loadUserProfile(true);
  }

  ionViewDidEnter() {
    this.myApp.setPageActive("UserProfileComponent");
  }
}
