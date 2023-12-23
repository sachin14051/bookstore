import { Injectable } from '@angular/core';
import { Iobj } from '../model/model';
import Swal from 'sweetalert2';

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
      Swal.fire({
        position: "center",
        icon: "success",
        title: "login Successful..WelCome",
        showConfirmButton: false,
        timer: 1500
      });
      return true
    }else{
      return false
    }

  }
}
