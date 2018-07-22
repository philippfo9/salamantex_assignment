import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {AppConfigProvider} from "../providers/app-config/app-config";
import {UserProvider} from "../providers/user/user";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = 'UserProfileComponent';

  isLoggedIn: boolean;

  pages: Array<{title: string, component: string, selected: boolean}>;

  authorizedPages: Array<{title: string, component: string, selected: boolean}>;
  unauthorizedPages: Array<{title: string, component: string, selected: boolean}>;



  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public appConfig: AppConfigProvider,
              public userService: UserProvider) {
    this.initializeApp();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  initializeApp() {
    this.appConfig.init();
    this.unauthorizedPages = [
      { title: 'Login', component: 'LoginPage', selected: false},
      { title: 'Registrieren', component: 'RegisterPage', selected: false},
    ];
    this.authorizedPages = [
      { title: 'Userprofil', component: 'UserProfileComponent', selected: false},
      { title: 'Neue Transaktion', component: 'SubmitTransactionComponent', selected: false},
      { title: 'Bisherige Transaktionen', component: 'TransactionsPage', selected: false}
    ];
    this.pages = this.unauthorizedPages;
    this.userService.loadUserProfile(false).then(success => {
      console.log("callback user profile", success);
      if(success) {
        this.pages = this.authorizedPages;
        this.rootPage = 'UserProfileComponent';
      } else {
        this.rootPage = 'LoginPage';
      }
    });
  }

  navigateTo(page) {
    this.pages.forEach(p => {
      if(p == page) {
        p.selected = true;
        this.nav.setRoot(p.component);

      } else {
        p.selected = false;
      }
    });
  }

  setPageActive(pageName) {
    if(pageName == 'LoginPage' || pageName == 'RegisterPage') {
      this.pages = this.unauthorizedPages;
    } else {
      this.pages = this.authorizedPages;
    }
    this.pages.forEach(page => {
      if(page.component == pageName) {
        page.selected = true;
      } else {
        page.selected = false;
      }
    });
  }

  logout() {
    this.isLoggedIn = false;
    this.pages = this.unauthorizedPages;
    this.nav.setRoot('LoginPage');
    this.userService.logout();
  }


}

