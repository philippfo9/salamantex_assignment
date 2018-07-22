import {Component, Input} from '@angular/core';


@Component({
  selector: 'input-disabled',
  templateUrl: 'input-disabled.html'
})
export class InputDisabledComponent {

  @Input() text: string;

  constructor() {
  }

}
