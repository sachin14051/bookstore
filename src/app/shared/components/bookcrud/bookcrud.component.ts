import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ibooks } from '../../model/model';
import { BooksDataService } from '../../service/books-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-bookcrud',
  templateUrl: './bookcrud.component.html',
  styleUrls: ['./bookcrud.component.scss']
})
export class BookcrudComponent implements OnInit {
    id!: string
   bookForm !:FormGroup
  constructor(private _booksService:BooksDataService,
    private _router:Router,
    private changeDetectorRefs: ChangeDetectorRef,
    private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.createBookForm();
  this.id = this._route.snapshot.params['id'];
  console.log(this.id);
   
this._booksService.getSingleObj(this.id).subscribe((res:Ibooks)=>
{
  this.bookForm.patchValue(res)
})

    
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
 Swal.fire({
  position: "center",
  icon: "success",
  title: "Your book data has been saved",
  showConfirmButton: false,
  timer: 1500
});

 this.bookForm.reset()
 this.changeDetectorRefs.detectChanges()
 this._router.navigate(['/home']);
  }

  onUpdate(){
    let obj :Ibooks ={
      title : this.bookForm.value.title,
      author :this.bookForm.value.author,
      date : this.bookForm.value.date,
      id :this.bookForm.value.id,
      price :this.bookForm.value.price
    
    }
    console.log(obj);
    
    this._booksService.onUpdate(obj,this.id).subscribe((res)=>console.log(res)
    )
    Swal.fire({
      title: 'success!',
      text: 'updated book data',
      icon: 'success',
      confirmButtonText: 'ok'
    })
    this._router.navigate(['/home'])

  }

}
