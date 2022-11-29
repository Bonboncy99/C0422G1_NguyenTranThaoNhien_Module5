import {Injectable} from '@angular/core';
import {CustomerType} from '../model/customer-type';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API = "http://localhost:8080/customers";
@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(API + "/customerTypes");
  }

  findById(id: number): Observable<any> {
    return this.http.get('http://localhost:3000/customerTypes/' + id);
  }
}
