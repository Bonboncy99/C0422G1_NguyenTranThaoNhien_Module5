import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AbstractControl, ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;

  countryList = ['VN', 'HQ', 'TQ'];

  constructor() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      passwordGroup: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      }, [this.passwordValid]),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(18),this.checkNumber]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])
    });

  }

  ngOnInit(): void {
  }

  register() {
    console.log(this.registerForm);
  }

  checkNumber(control: AbstractControl): ValidationErrors | null {
    if (isNaN(control.value)) {
      return {'NaN': true};
    }
    return null;
  }

  passwordValid(passwordGroup: AbstractControl): ValidationErrors | null {

    const password = passwordGroup.get('password').value;
    const confirmPassword = passwordGroup.get('confirmPassword').value;
    if (password !== confirmPassword) {
      return {'passwordvalid': true};
    }
    return null;
  }
}
