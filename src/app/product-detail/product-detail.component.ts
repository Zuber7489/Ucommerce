import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  id:any;
  data:any;
constructor(public route:ActivatedRoute,public http:HttpClient,public product:ProductsService){}
ngOnInit(){
  this.route.queryParams.subscribe(params=>{
    this.id=params['id']
  })
  console.log(this.id)
  this.getSingleProduct();
}

getSingleProduct(){
  this.product.getSingleProduct(this.id).subscribe(res=>{
    this.data=res;
    console.log(this.data)
  })
}

addToCart(data:any){
  this.product.addToCart(data);
  console.log(data);
  alert('Product Added Successfully');
  location.reload()
  
    }

    updateMainImage(imageUrl: string): void {
      const currentImage = document.getElementById('current') as HTMLImageElement;
      if (currentImage) {
        currentImage.src = imageUrl;
      }
    }
}
