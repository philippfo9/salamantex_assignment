import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import { TransactionsProvider } from '../providers/transactions/transactions';
import { UserProvider } from '../providers/user/user';
import { StandardsProvider } from '../providers/standards/standards';
import { ErrorHandlerProvider } from '../providers/error-handler/error-handler';
import { HttpServiceProvider } from '../providers/http-service/http-service';
import {IonicStorageModule} from "@ionic/storage";
import { AppConfigProvider } from '../providers/app-config/app-config';
import {HttpClientModule} from "@angular/common/http";
import { LoadingStateProvider } from '../providers/loading-state/loading-state';
import { SubmitTransactionProvider } from '../providers/submit-transaction/submit-transaction';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    TransactionsProvider,
    UserProvider,
    StandardsProvider,
    ErrorHandlerProvider,
    HttpServiceProvider,
    AppConfigProvider,
    LoadingStateProvider,
    SubmitTransactionProvider
  ]
})
export class AppModule {}
