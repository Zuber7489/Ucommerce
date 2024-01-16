import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent {
  constructor(public productservice:ProductsService,private router:Router){}
  product:any;
  
  data:any;
  pdlen:any;
  ngOnInit(){
    this.data=this.productservice.getCartItems();
    this.pdlen=this.data.length;
   }
 
   
   calculateTotalPrice(): number {
     return this.data.reduce((total:any, data:any) => total + (data.price * data.quantity), 0);
   }
 
}
