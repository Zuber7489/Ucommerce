import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  id:any;
user:any;
constructor(public router:Router,public auth:AuthService){}

loginForm=new FormGroup({
  email:new FormControl(''),
  password:new FormControl(''),
})

gotoSignUpPage(){
  this.router.navigate(['signup'])
}

submitNow(){
  console.log(this.loginForm.value)
  this.auth.getFormData(this.loginForm.value).subscribe((res:any)=>{
   this.user= res.find((user:any)=>{
   return user.email===this.loginForm.value.email && user.password===this.loginForm.value.password;
   });if(this.user){
    alert('Login Successful');
    localStorage.setItem(`user`,JSON.stringify(this.user))
    this.router.navigate(['/'])
   }else{
    alert('Please check Email & Password');
   }
  })
}

}
