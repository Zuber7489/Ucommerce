import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  constructor(public productservice:ProductsService,private router:Router,private fb: FormBuilder){}
  product:any;
  
  data:any;
  pdlen:any;
  
  checkoutForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', [Validators.required]],
    address: ['', Validators.required],
    
  });

  ngOnInit(){
   this.data=this.productservice.getCartItems();
   this.pdlen=this.data.length;
  }

  
  calculateTotalPrice(): number {
    return this.data.reduce((total:any, data:any) => total + (data.price * data.quantity), 0);
  }

  gotocart(){
    this.router.navigate(['cart'])
  }


gotopayment(): void {
  if (this.checkoutForm.valid) {
    // Perform the payment processing logic here
    // If successful, show success message
    alert('Redirecting to Payment Page 😊');
    this.router.navigate(['payment'])
  } else {
    // If any field is empty, show the alert message
    alert('Please fill in all details.');
  }
}

}
