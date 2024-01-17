import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http:HttpClient) { }

postFormData(id:any){
  return this.http.post('https://recuitment-app-database.onrender.com/signup',id)
}
getFormData(id:any){
  return this.http.get('https://recuitment-app-database.onrender.com/signup',id)
}

}
