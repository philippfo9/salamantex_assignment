import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'login-form',
  templateUrl: 'login.html'
})
export class LoginComponent {

  @Input() user;
  @Output() localLogin = new EventEmitter<void>();

  invalidMarker: boolean = false;

  loginFormGroup: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(24), Validators.pattern('[-a-zA-Z0-9ßäöüÄÖÜ,.*+#:; ]*')])]
    });
  }

  ngAfterViewInit() {
    this.user.showPassword = false;
  }

  standardLogin() {
    if(this.loginFormGroup.valid) {
      this.localLogin.emit();
    } else {
      this.invalidMarker = true;
    }
  }

}
