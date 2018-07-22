import { Injectable } from '@angular/core';

@Injectable()
export class AppConfigProvider {

  environment = "dev";

  apiEndpoint;
  authEndpoint;

  constructor() {
    console.log('Hello AppConfigProvider Provider');
  }

  init() {
    if(this.environment == "dev") {
      this.apiEndpoint = "http://localhost:3000/api";
      this.authEndpoint = "http://localhost:3000/auth";
    }
  }

}
