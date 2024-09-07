import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ucommerce';
  isLoginPage: boolean = false;

  constructor(private router: Router) {
    // Subscribe to router events to check the current route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is login, signup, or order-confirmation
        const loginRoutes = ['/login', '/signup', '/order-confirmation'];
        this.isLoginPage = loginRoutes.some(route => this.router.url.includes(route));
      }
    });
  }
}
