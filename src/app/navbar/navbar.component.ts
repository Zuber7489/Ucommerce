import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public router: Router, public productService: ProductsService) {}
  data: any;
  pdlen: any;
  catProd: any;
  name: any;
  isNavbarCollapsed = true;  // State to track if the navbar is collapsed

  // Fetch product categories
  getCategoriesProduct() {
    this.productService.getCategories().subscribe(
      res => {
        this.catProd = res;
      },
      error => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  ngOnInit() {
    this.data = this.productService.getCartItems();
    this.pdlen = this.data.length;
    this.getCategoriesProduct();
    this.name = localStorage.getItem('loggedInUserEmail');
  }

  // Navigation methods

  goToCart() {
    this.router.navigate(['cart']).then(() => {
      this.isNavbarCollapsed = true; // Close the navbar after navigation
    });
  }

  goToCategoriesProductPage(pdname: any) {
    this.router.navigate(['categoriesProducts'], { queryParams: { pdname: pdname } }).then(() => {
      this.isNavbarCollapsed = true; // Close the navbar after navigation
    });
  }

  gotoallproduct() {
    this.router.navigate(['all-products']).then(() => {
      this.isNavbarCollapsed = true; // Close the navbar after navigation
    });
  }

  // Logout method
  gotologin() {
    localStorage.removeItem('loggedInUserEmail');
    localStorage.removeItem('loggedInUserPassword');
    this.router.navigate(['login']).then(() => {
      this.isNavbarCollapsed = true; // Close the navbar after navigation
    });
  }

  // Toggle navbar collapse state
  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}
