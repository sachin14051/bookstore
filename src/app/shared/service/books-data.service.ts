import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ibooks } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class BooksDataService {
 url :string = `${environment.badseUrl}/books.json`
  constructor(private _http:HttpClient) { }

  allBooksData(){
    return this._http.get<Ibooks>(this.url)
  }

  addBooks(obj:Ibooks){
    
   return this._http.post<Ibooks>(this.url,obj)
  }

  deleteBooks(id:string){
    let deleteUrl = `${environment.badseUrl}/books/${id}.json`;
    
  return this._http.delete(deleteUrl)

  }
}
