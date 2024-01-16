import { Component, ViewChild } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  @ViewChild('paymentForm') paymentForm!: NgForm;

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

  cardholderName = '';
  cardNumber = '';
  expiry = '';
  cvv = '';

  

  submitForm(): void {
    if (this.paymentForm.valid) {
      // Perform the payment processing logic here
      // If successful, show success message
      alert('Success! Payment processed.');
      console.log(this.paymentForm.value)
      this.router.navigate(['order-confirmation'])
    } else {
      // If any field is empty, show the alert message
      alert('Please fill in all payment details.');
    }
  }
}
