import { Injectable } from '@angular/core';
import {HttpServiceProvider} from "../http-service/http-service";
import {Storage} from "@ionic/storage";

@Injectable()
export class AuthProvider {

  token;

  constructor(public storage: Storage) {
    console.log('Hello AuthProvider Provider');
  }


  async setToken(token) {
    return await this.storage.set("token", token);
  }

  async getToken() {
    if(!this.token)
      this.token = await this.storage.get("token");

    return this.token;
  }

  async removeToken() {
    return await this.storage.remove("token");
  }
}
