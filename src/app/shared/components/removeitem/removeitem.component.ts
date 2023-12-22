import { Component, OnInit } from '@angular/core';
import {  MatDialogRef,  } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-removeitem',
  templateUrl: './removeitem.component.html',
  styleUrls: ['./removeitem.component.scss']
})
export class RemoveitemComponent implements OnInit {

  constructor(private _matDiaref:MatDialogRef<RemoveitemComponent>,
                private _router:Router) { }

  ngOnInit(): void {
  }
  notRemove(){
    this._matDiaref.close(false)
  }
  
  remove(){
    this._matDiaref.close(true);
    this._router.navigate(['/home'])

  }
}
