import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICat } from '../types/icat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatData {

  private apiUrl = "http://localhost:2000/cats";

  constructor(private http: HttpClient) {}

  getAllCats(): Observable<ICat[]> {
    return this.http.get<ICat[]>(this.apiUrl);
  }

  getCatById(id: number): Observable<ICat> {
    return this.http.get<ICat>(`${this.apiUrl}/${id}`);
  }
  postCat(cat: ICat): Observable<ICat> {
    return this.http.post<ICat>(this.apiUrl, cat);
  }
}
