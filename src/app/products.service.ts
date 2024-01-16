import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http:HttpClient) { }
  getAllProducts(){
    return this.http.get('https://dummyjson.com/products')
  }
  getSingleProduct(id:any){
    return this.http.get('https://dummyjson.com/products/'+id)
  }


  searchProduct(query: any) {
    const url = `https://dummyjson.com/products/search?q=${query}`;
    return this.http.get(url);
  }

  getCategories(){
    return this.http.get('https://dummyjson.com/products/categories')
  }
  getCategoriesProduct(catName:any){
    return this.http.get('https://dummyjson.com/products/category/'+catName)
  }

  addToCart(product: any) {
    // Get the existing cart items from localStorage, or initialize an empty array
    const cartItems: any[] = JSON.parse(localStorage.getItem('cartItems') ?? '[]');
    // Check if the product is already in the cart
    const existingProduct = cartItems.find(item => item.id === product.id);
  
    if (existingProduct) {
      // If the product is already in the cart, update the quantity
      existingProduct.quantity += 1;
    } else {
      // If the product is not in the cart, add it with quantity 1
      cartItems.push({ ...product, quantity: 1 });
    }
    // Save the updated cart items back to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    this.updateLocalStorage();
  }
  

  getCartItems(): any[] {
    // Retrieve the cart items from localStorage
    const storedCartItems = localStorage.getItem('cartItems'); 
    // Parse the stored data or provide an empty array if it's null or undefined
    return JSON.parse(storedCartItems ?? '[]');
  }

  deleteCartItem(productId: any) {
    // Get the existing cart items from localStorage
    const cartItems: any[] = JSON.parse(localStorage.getItem('cartItems') ?? '[]');
    // Find the index of the item to remove
    const itemIndex = cartItems.findIndex(item => item.id === productId);
    // If the item is found, remove it from the cart
    if (itemIndex !== -1) {
      cartItems.splice(itemIndex, 1);
      // Save the updated cart items back to localStorage
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      this.updateLocalStorage();
    }
  }

  updateLocalStorage() {
    const cartItems: any[] = JSON.parse(localStorage.getItem('cartItems') ?? '[]');
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}



 
}
