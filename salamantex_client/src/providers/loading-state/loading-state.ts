import { Injectable } from '@angular/core';

@Injectable()
export class LoadingStateProvider {

  isLoading = false;

  constructor() {
    console.log('Hello LoadingStateProvider Provider');
  }

  startLoading() {
    this.isLoading = true;
  }

  endLoading() {
    this.isLoading = false;
  }



}
