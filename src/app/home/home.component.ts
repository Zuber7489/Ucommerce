import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  searchForm=new FormGroup({
    searchvalue:new FormControl('')
      })
  productdata:any;
  constructor(public router:Router,public http:HttpClient,public product:ProductsService){}
  ngOnInit(){
    this.getAllProducts();
  }
openProductdetailpage(productId: number) {
  // Navigate to the "productdetail" page with the product ID as a query parameter
  this.router.navigate(['productdetail'], { queryParams: { id: productId } });
}
  getAllProducts(){
    this.product.getAllProducts().subscribe(res=>{
    this.productdata=res;
    console.log(this.productdata,'zuber')
    })
  }

  addToCart(data:any){
this.product.addToCart(data);
console.log(data);
alert('Product Added Successfully');
location.reload()

  }

  filtereddata:any;
onSubmit(){
this.product.searchProduct(this.searchForm.value.searchvalue).subscribe(res=>{
this.filtereddata=res;
})
}

}
