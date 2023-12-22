import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ibooks } from '../../model/model';
import { BooksDataService } from '../../service/books-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bookcrud',
  templateUrl: './bookcrud.component.html',
  styleUrls: ['./bookcrud.component.scss']
})
export class BookcrudComponent implements OnInit {

   bookForm !:FormGroup
  constructor(private _booksService:BooksDataService,
    private _router:Router) { }

  ngOnInit(): void {
    this.createBookForm();
   
    
  }

  createBookForm(){
    this.bookForm = new FormGroup({
      title : new FormControl(null,Validators.required),
      author : new FormControl(null,Validators.required),
      date : new FormControl(null,Validators.required),
      price : new FormControl(null,Validators.required),
      id : new FormControl(null,Validators.required),

    })
  }
 
  OnAddBook(){
 console.log(this.bookForm.value);
 let obj :Ibooks ={
  title : this.bookForm.value.title,
  author :this.bookForm.value.author,
  date : this.bookForm.value.date,
  id :this.bookForm.value.id,
  price :this.bookForm.value.price

 }
 this._booksService.addBooks(obj).subscribe((res:Ibooks)=>console.log(res)
 )

 this._router.navigate(['/home']);
 this.bookForm.reset()
  }

}
