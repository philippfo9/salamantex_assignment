import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AuthProvider} from "../auth/auth";
import {AppConfigProvider} from "../app-config/app-config";
import {ErrorHandlerProvider} from "../error-handler/error-handler";
import {CustomError} from "../../model/CustomError";
import {LoadingStateProvider} from "../loading-state/loading-state";

interface Response {
  status: number;
  body: any;
}

interface RequestObject {
  path: string;
  options: any;
}


@Injectable()
export class HttpServiceProvider {

  constructor(public http: HttpClient, public authService: AuthProvider, public appConfig: AppConfigProvider,
              public errorHandler: ErrorHandlerProvider, public loadingState: LoadingStateProvider) {

  }

  async getRequest(base: string, path: string, authorization: boolean, showError: boolean) {
      //for whatever reason with httpclient i can't outsource the preparation code in a function
      this.loadingState.startLoading();
      let token = "";

      if(authorization)
        token = await this.authService.getToken();

      let reqPath = this.getBasePath(base) + path;

      let options = this.getOptions(token);

    let res: Response = <Response>await this.http.get<Response>(reqPath, {observe: "response", ...options}).toPromise()
        .catch( err => {
            console.log("err", err);
          this.errorHandler.handle(new CustomError("http", (err.error)?err.error.message:"", err.status), showError);
        });

    return this.handleResponse(res, showError);
  }

  async postRequest(base: string, path: string, body: any, authorization: boolean, showError: boolean) {
    this.loadingState.startLoading();
    let token = "";
    if(authorization)
      token = await this.authService.getToken();

    let reqPath = this.getBasePath(base) + path;

    let options = this.getOptions(token);

    console.log("body", body);

    let res: Response = <Response>await this.http.post<Response>(reqPath, body, {observe: "response", ...options}).toPromise()
      .catch(err => {
        console.log("err", err);
        this.errorHandler.handle(new CustomError("http", (err.error)?err.error.message:"", err.status), showError);
      });

    return this.handleResponse(res, showError);
  }

  getOptions(token: string) {
    console.log("token for request", token);
        return  {
          headers: new HttpHeaders({
            Authorization: "Bearer "+token
          })
        };
  }

  handleResponse(res: Response, showError: boolean) {
    this.loadingState.endLoading();
    if(res) {
      if(res.status == 200) {
        return {success: true, body: res.body};
      } else {
        this.errorHandler.handle(new CustomError("http", res.body.message, res.status), showError);
      }
    }
    return {success: false};

  }


  getBasePath(base) {
    return (base == "auth") ? this.appConfig.authEndpoint : this.appConfig.apiEndpoint;
  }


}
