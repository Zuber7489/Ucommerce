import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(public router:Router){}

loginForm=new FormGroup({
  email:new FormControl(''),
  password:new FormControl(''),
})

gotoSignUpPage(){
  this.router.navigate(['signup'])
}

submitNow(){}

}
