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
import { authGuard } from './auth.guard';


const routes: Routes = [
  {path:'',redirectTo: '/login',pathMatch:'full'},
  {path:'home',component:HomeComponent,canActivate:[authGuard]},
  {path:'productdetail',component:ProductDetailComponent,canActivate:[authGuard]},
  {path:'cart',component:CartComponent,canActivate:[authGuard]},
  {path:'categoriesProducts',component:CategoriesProductComponent,canActivate:[authGuard]},
  {path:'login',component:LoginComponent},
  {path:'signup',component:RegisterComponent},
  {path:'checkout',component:CheckoutComponent,canActivate:[authGuard]},
  {path:'payment',component:PaymentComponent,canActivate:[authGuard]},
  {path:'order-confirmation',component:OrderConfirmationComponent,canActivate:[authGuard]},
  {path:'all-products',component:AllProductComponent,canActivate:[authGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
