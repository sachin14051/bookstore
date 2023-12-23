import { Injectable } from '@angular/core';
import { Iobj } from '../model/model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
   database= {
    email : "admin",
    password : "admin"
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
      Swal.fire({
        position: "center",
        icon: "error",
        title: "login UnSuccessful (userId:admin, password:admin)",
        showConfirmButton: true,
        timer: 1500
      });
      return false
    }

  }
}
