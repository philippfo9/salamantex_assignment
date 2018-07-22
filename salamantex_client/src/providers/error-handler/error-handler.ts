import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {CustomError} from "../../model/CustomError";
import {StandardsProvider} from "../standards/standards";

@Injectable()
export class ErrorHandlerProvider {

  constructor(public standards: StandardsProvider) {
    console.log('Hello ErrorHandlerProvider Provider');
  }

  handle(err: CustomError, showError: boolean) {
    console.log("new error", err);
    if(err.type == "http") {
      let message = err.message;
      if(err.status == 500)
        message = "Es ist ein interner Serverfehler aufgetreten";
      if(showError)
        this.standards.showAlert("Fehler", message, ()=>{});
    }
  }

}
