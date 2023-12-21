import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Iobj } from '../../model/model';
import { AuthenticationService } from '../../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;

  constructor(private loginService:AuthenticationService,
              private _router:Router) { }

  ngOnInit(): void {
    this.loginFormDetails()
  }

  loginFormDetails(){
    this.loginForm = new FormGroup({
      email:new FormControl(null,Validators.required),
      password : new FormControl(null,Validators.required)
    })
  }

  onSubmitbtn(){

    let obj: Iobj = {
      email : this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.loginForm.reset()
    this.loginService.isAuthenticated(obj)
  
     this._router.navigate(['/navbar'])
  }

}
