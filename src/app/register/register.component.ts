import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(public router:Router){}

  SignUpForm=new FormGroup({
    email:new FormControl(''),
    password:new FormControl(''),
  })
  
  gotoLoginPage(){
    this.router.navigate(['login'])
  }
  submitNow(){
    console.log(this.SignUpForm.value)
  }
}
