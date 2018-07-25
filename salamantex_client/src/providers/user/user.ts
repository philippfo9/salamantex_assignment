import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpServiceProvider} from "../http-service/http-service";
import {User} from "../../model/User";
import {ServiceResponse} from "../../model/ServiceResponse";
import {AuthProvider} from "../auth/auth";
import {plainToClass} from "class-transformer";


@Injectable()
export class UserProvider {
  user;
  userProfile$: Promise<ServiceResponse>;
  profileLoading = false;

  constructor(public httpService: HttpServiceProvider, public authService: AuthProvider) {
    this.user = new User();
  }

  activateEdit() {
    this.user.backup = this.user;
  }

  cancelEdit() {
    if(this.user.hasOwnProperty("id")) {
      for(let prop in this.user) {
        if(this.user.hasOwnProperty(prop)) {
          for(let backupProp in this.user.backup) {
            if(this.user.backup.hasOwnProperty(backupProp)) {
              if(prop == backupProp) {
                this.user[prop] = this.user.backup[backupProp];
              }
            }
          }
        }
      }
    }
  }

  async register() {
    let res:ServiceResponse = <ServiceResponse> await this.httpService.postRequest("api", "/register", this.user, false, true);
    if(res && res.success) {
      this.user.id = res.body.id;
      let success = {register: true, login: await this.login()};
      return success;
    }
    return false;
  }

  async logout() {
    return await this.authService.removeToken();
  }

  async login() {
    let res:ServiceResponse = <ServiceResponse>await this.httpService.postRequest("api", "/login", this.user, false, true);
    if(res && res.success) {
      await this.authService.setToken(res.body.token);
      return true;
    }
  }

  async updateUser() {
    let backup = this.user.backup;
    delete this.user.backup;
    let res:ServiceResponse = <ServiceResponse>await this.httpService.postRequest("auth", "/user/"+this.user.id, this.user, false, true);
    if(res && res.success) {
      return true;
    } else {
        this.user.backup = backup;
    }
  }

  async loadUserProfile(showError: boolean) {
    if(!this.profileLoading) {
      this.profileLoading = true;
      this.userProfile$ = <Promise<ServiceResponse>>this.httpService.getRequest("auth", "/user", true, showError);
      let res: ServiceResponse = await this.userProfile$;
      if(res && res.success) {
        this.profileLoading = false;
        this.user = plainToClass(User, res.body);
        return true;
      }
    }
  }

}
