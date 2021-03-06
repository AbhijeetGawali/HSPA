import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-user-Register',
  templateUrl: './user-Register.component.html',
  styleUrls: ['./user-Register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  registrationForm:FormGroup;
  userSubmitted: boolean;

  // Add data in Local Storage and use service :  UserService
  user: User;

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private alertify: AlertifyService) {}

  ngOnInit() {

    this.createRegisterationForm();
  }

  // This Example of Reactive Forms validations
  createRegisterationForm() {
    this.registrationForm =  this.fb.group({
      username: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.maxLength(10)]]
    }, {validators: this.passwordMatchingValidatior})
  };

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
    console.log(this.registrationForm.value);
    this.userSubmitted = true;

    if (this.registrationForm.valid) {
      // this.user = Object.assign(this.user, this.registerationForm.value);
      this.userService.addUser(this.userData());
      this.onReset();
      this.alertify.success('Congrats, you are successfully registered');
        }
         else
        {
          this.alertify.error('Kindly provide the required fields');
        }
  }

  onReset() {
    this.userSubmitted = false;
    this.registrationForm.reset();
  }

  userData(): User {
    return this.user = {
      userName: this.username.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }

}
