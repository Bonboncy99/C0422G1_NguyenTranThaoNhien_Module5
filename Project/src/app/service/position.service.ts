import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PositionService {


  constructor(private http:HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:3000/positions');
  }

  findById(id:number):Observable<any>{
    return this.http.get('http://localhost:3000/positions/' + id);
  }}
