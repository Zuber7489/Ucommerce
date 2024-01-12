import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categories-product',
  templateUrl: './categories-product.component.html',
  styleUrls: ['./categories-product.component.css']
})
export class CategoriesProductComponent {
pdname:any;
constructor(public productService:ProductsService,public route:ActivatedRoute,public router:Router){}

ngOnInit(){
  this.route.queryParams.subscribe(params=>{
  this.pdname=params['pdname']
  this.getCategoriesProduct();
  })
}
categories:any;
getCategoriesProduct(){
  this.productService.getCategoriesProduct(this.pdname).subscribe(res=>{
this.categories=res;
  })
  
}

openProductdetailpage(productId: number) {
  // Navigate to the "productdetail" page with the product ID as a query parameter
  this.router.navigate(['productdetail'], { queryParams: { id: productId } });
}

addToCart(data:any){
  this.productService.addToCart(data);
  console.log(data);
  alert('Product Added Successfully');
  location.reload()
  
    }

}
