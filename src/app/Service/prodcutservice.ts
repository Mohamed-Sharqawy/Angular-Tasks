import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Iproduct } from '../Models/iproduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Prodcutservice {
  
  private FakeapiUrl = `${environment.apiBaseUrl}/products`;

  constructor(private http: HttpClient) { }

  getAllProds() : Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>(this.FakeapiUrl)
  }

  getProdById(id:number): Observable<Iproduct>{
    return this.http.get<Iproduct>(`${this.FakeapiUrl}/${id}`);
  }

  searchProdsByName(name:string): Observable<Iproduct[]>{

    if(!name.trim()){
      return this.getAllProds();
    }
    return this.http.get<Iproduct[]>(`${this.FakeapiUrl}?productName_like=${name}`);
  }
}
