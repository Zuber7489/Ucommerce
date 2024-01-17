import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(public router:Router,public auth:AuthService){}

  SignUpForm=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
  })
  
  gotoLoginPage(){
    this.router.navigate(['login'])
  }
  submitNow(){
    console.log(this.SignUpForm.value)
    this.auth.postFormData(this.SignUpForm.value).subscribe(res=>{
 alert('Signup Successfull')
 this.router.navigate(['/login'])   
    })
  }
}
