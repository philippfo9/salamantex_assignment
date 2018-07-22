import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'register-form',
  templateUrl: 'register.html'
})
export class RegisterComponent {

  @Input() user;
  @Output() registerEvent = new EventEmitter<void>();

  invalidMarker: boolean = false;

  registerFormGroup: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.registerFormGroup = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      name: ['', Validators.compose([Validators.required, Validators.pattern('[-a-zA-ZßäöüÄÖÜ]*')])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(24), Validators.pattern('[-a-zA-Z0-9ßäöüÄÖÜ,.*+#:; ]*')])],
      passwordAgain: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(24), Validators.pattern('[-a-zA-Z0-9ßäöüÄÖÜ,.*+#:; ]*')])]
    });
  }

  register() {
    if(this.registerFormGroup.valid && this.user.password == this.user.passwordAgain) {
      this.user.showPassword = false;
      this.invalidMarker = false;
      this.registerEvent.emit();
    } else {
      this.invalidMarker = true;
    }
  }

  ngAfterViewInit() {
    this.user.showPassword = false;
  }
}
