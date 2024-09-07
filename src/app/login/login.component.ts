import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent  implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,public router:Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  ngOnInit(): void {
    // Check if login credentials are stored in localStorage
    const storedEmail = localStorage.getItem('loggedInUserEmail');
    const storedPassword = localStorage.getItem('loggedInUserPassword');
  
    if (storedEmail && storedPassword) {
      // Auto-login the user using stored credentials
      this.authService.signIn(storedEmail, storedPassword)
        .then(() => {
          console.log('Auto-login successful');
          this.router.navigate(['home']);
        })
        .catch(error => {
          console.error('Auto-login error', error);
          
          // Clear stored credentials if auto-login fails
          localStorage.removeItem('loggedInUserEmail');
          localStorage.removeItem('loggedInUserPassword');
          this.router.navigate(['login']);
        });
    }
  }

  async login() {
    if (this.loginForm.valid) {
      console.log('Login Form Submitted', this.loginForm.value);
      // Handle login logic here
      const { email, password } = this.loginForm.value;
      try {
        await this.authService.signIn(email, password);
        console.log('Login successful');
        alert('Login Successful')
         // Save login credentials to localStorage
      localStorage.setItem('loggedInUserEmail', email);
      localStorage.setItem('loggedInUserPassword', password);
        
        this.router.navigate(['home']); // Replace '/home' with the actual route you want to navigate to
      } catch (error) {
        alert('please check login email or password')
        console.error('Login error', error);
      }
    }

  }
  
  
  signup(){
    this.router.navigate(['signup'])
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle().then((userCredential) => {
      // Handle login success
      console.log(userCredential.user);
      this.router.navigate(['home']);
    })
    .catch((error) => {
      // Handle login error
      console.error(error);
    });
  }




}
