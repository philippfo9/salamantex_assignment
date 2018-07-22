import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from "../../model/User";
import {AuthProvider} from "../../providers/auth/auth";
import {UserProvider} from "../../providers/user/user";
import {StandardsProvider} from "../../providers/standards/standards";
import {MyApp} from "../../app/app.component";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserProvider,
              public standards: StandardsProvider, public myApp: MyApp) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  ionViewDidEnter() {
    if(this.myApp.isLoggedIn) {
      this.navCtrl.setRoot("UserProfileComponent");
    } else {
      this.myApp.setPageActive("RegisterPage");
    }
  }

  async register() {
    let success: any = await this.userService.register();
    if(success.register) {
      if(success.login) {
        this.navCtrl.push("UserProfileComponent");
      } else {
        this.navCtrl.push("LoginPage");
        this.standards.showAlert("Erfolgreich", "Sie können sich nun mit Ihrem neuen Profil einloggen", ()=>{});
      }
    }
  }

}
