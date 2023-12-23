import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BooksDataService } from '../../service/books-data.service';
import { Ibooks } from '../../model/model';
import { MatDialog } from '@angular/material/dialog';
import { RemoveitemComponent } from '../removeitem/removeitem.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  booksArray: Array<Ibooks> = []
  constructor(private _booksDta: BooksDataService,
    private _dialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this._booksDta.allBooksData().subscribe((res: any) => {
      let arr: Array<any> = [];
      for (const key in res) {
        let obj = {
          ...res[key], id: key
        }
        arr.push(obj)
      }
      this.booksArray = arr
    })

  }
  displayedColumns: string[] = ['bookId', 'title', 'author', 'date', 'price', 'edit', 'delete'];



  onDelete(id: string) {
    let dia = this._dialog.open(RemoveitemComponent);
    this.changeDetectorRefs.detectChanges()

    dia.afterClosed().subscribe((getConfirm) => {
      if (getConfirm) { 
        this._booksDta.deleteBooks(id).subscribe((res: any) => { console.log(res) })
           let getIndex = this.booksArray.findIndex((ele)=>ele.id === id);
       let removeIndex = this.booksArray.splice(getIndex,1);
      }
    })

  }

 


}
