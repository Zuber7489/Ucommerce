import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,public router:Router) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  ngOnInit(): void {
    
  }
  signup() {
    if (this.signupForm.valid) {
      console.log('Form Submitted', this.signupForm.value);
      // Handle the signup logic here
      const { email, password } = this.signupForm.value;
    
      this.authService.signUp(email, password)
        .then(() => {
          console.log('Sign up successful');
          alert('Signup Successfully')
          this.router.navigate(['login']);
        })
        .catch(error => {
          console.error('Sign up error', error);
          alert('please check login email or password')
        });
    }

  }
  

  signupredirect(){
    this.router.navigate(['login'])
  }


}
