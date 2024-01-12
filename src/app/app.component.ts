import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ucommerce';
  isLoginPage: boolean=false;

  constructor(private router: Router) {
    // Subscribe to router events to check the current route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = this.router.url.includes('login') || this.router.url.includes('signup'); // Check if the current route includes 'login'
      }
    });
  }
}
