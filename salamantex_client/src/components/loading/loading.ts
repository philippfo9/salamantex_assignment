import { Component } from '@angular/core';
import {LoadingStateProvider} from "../../providers/loading-state/loading-state";

@Component({
  selector: 'loading',
  templateUrl: 'loading.html'
})
export class LoadingComponent {


  constructor(public loadingState: LoadingStateProvider) {
  }

}
