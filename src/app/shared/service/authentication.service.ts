import { Injectable } from '@angular/core';
import { Iobj } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
   database= {
    email : "user@user.com",
    password : "8ed46d8"
   }
  constructor() { }

  isAuthenticated(obj:Iobj){
    if(obj.email === this.database.email && obj.password === this.database.password){
      localStorage.setItem("loginKey", "successful authentication")
      return true
    }else{
      return false
    }

  }
}
