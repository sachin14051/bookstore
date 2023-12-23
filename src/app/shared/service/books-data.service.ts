import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ibooks } from '../model/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksDataService {
 url :string = `${environment.badseUrl}/books.json`
  constructor(private _http:HttpClient) { }

  allBooksData():Observable<Ibooks>{
    return this._http.get<Ibooks>(this.url)
  }

  addBooks(obj:Ibooks):Observable<Ibooks>{
    
   return this._http.post<Ibooks>(this.url,obj)
  }

  deleteBooks(id:string):Observable<any>{
    let deleteUrl = `${environment.badseUrl}/books/${id}.json`;
    
  return this._http.delete(deleteUrl)

  }

  getSingleObj(id:string){
    let getSingleId = `${environment.badseUrl}/books/${id}.json`;
    return this._http.get<Ibooks>(getSingleId)
  }

  onUpdate(obj:Ibooks,id:string){

    
    let updateUrl = `${environment.badseUrl}/books/${id}.json`;
    return this._http.patch(updateUrl,obj)
  }
}
