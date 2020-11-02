import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-Register',
  templateUrl: './user-Register.component.html',
  styleUrls: ['./user-Register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  registrationForm:FormGroup;

  constructor() { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required,Validators.minLength(8)]),
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required),
      mobile: new FormControl(null, [Validators.required,Validators.minLength(8)])
     }
      , this.passwordMatchingValidatior
     )
    }

    //Add Custom Validator
    passwordMatchingValidatior(fg: FormGroup): Validators {
      return fg.get('password').value === fg.get('confirmPassword').value ? null :
      {notmatched: true};
    }

      // ------------------------------------
  // Getter methods for all form controls
  // ------------------------------------
  get username() {
    return this.registrationForm.get('username') as FormControl;
  }

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }
  get password() {
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }
  // ------------------------


  onSubmit(){
    console.log(this.registrationForm);
  }

}
