import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
constructor(public productservice:ProductsService,private router:Router){}
product:any;
data:any;
pdlen:any;
ngOnInit(){
 this.data=this.productservice.getCartItems();
 this.pdlen=this.data.length;
}


deleteitem(id: any) {
  this.productservice.deleteCartItem(id);
  console.log('remove btn clicked');
  this.data = this.productservice.getCartItems(); // Update the data after deletion
  this.pdlen=this.data.length;
}

backtoHome(){
  this.router.navigate(['home'])
}


}
