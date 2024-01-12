import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

constructor(public router:Router,public productService:ProductsService){}
data:any;
pdlen:any;
catProd:any;
getCategoriesProduct(){
  this.productService.getCategories().subscribe(res=>{
    this.catProd=res;
  },
  (error) => {
    console.error('Error fetching categories:', error);
  })
}
ngOnInit(){
  this.data=this.productService.getCartItems();
  this.pdlen=this.data.length;
  this.getCategoriesProduct();
}

goToCart(){
  this.router.navigate(['cart'])
}


goToCategoriesProductPage(pdname:any){
  this.router.navigate(['categoriesProducts'],{queryParams:{pdname:pdname}})
}

isNavbarCollapsed = true;

toggleNavbar() {
  this.isNavbarCollapsed = !this.isNavbarCollapsed;
}

gotologin(){
  this.router.navigate(['login'])
}
}
