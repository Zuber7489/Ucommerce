import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesProductComponent } from './categories-product/categories-product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { AllProductComponent } from './all-product/all-product.component';


const routes: Routes = [
  {path:'',redirectTo: '/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'productdetail',component:ProductDetailComponent},
  {path:'cart',component:CartComponent},
  {path:'categoriesProducts',component:CategoriesProductComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:RegisterComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'payment',component:PaymentComponent},
  {path:'order-confirmation',component:OrderConfirmationComponent},
  {path:'all-products',component:AllProductComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
