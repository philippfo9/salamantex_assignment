import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from "../../model/User";
import {UserProvider} from "../../providers/user/user";
import {MyApp} from "../../app/app.component";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserProvider, public myApp: MyApp) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  localLogin() {
    this.userService.login().then(success => {
      if(success)
        this.navCtrl.setRoot("UserProfileComponent");
    });
  }

  ionViewDidEnter() {
    if(this.myApp.isLoggedIn) {
      this.navCtrl.setRoot("UserProfileComponent");
    } else {
      this.myApp.setPageActive("LoginPage");
    }

  }


}
