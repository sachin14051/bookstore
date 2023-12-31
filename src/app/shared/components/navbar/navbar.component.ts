import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  onLogout(){
    localStorage.removeItem("loginKey");
    this._router.navigate(['/'])
  }
  onaddBook(){
    this._router.navigate(['/bookCrud'])
  }

}
