import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error: string = '';
  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    age: new FormControl(null, [Validators.required, Validators.min(16), Validators.max(80)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(`^[A-Z][a-z]{2,8}`)])
  })
  constructor(public _AuthService: AuthService, public _Router: Router) { }

  formSubmit(registerForm: FormGroup) {
    console.log(registerForm);
    this._AuthService.register(registerForm.value).subscribe((response) => {
      if (response.message == 'success') {
        this._Router.navigate(['login'])
      }
      else {
        this.error = response.errors.email.message;
        console.log(this.error)
      }
    });
  }
  ngOnInit(): void {
  }

}
