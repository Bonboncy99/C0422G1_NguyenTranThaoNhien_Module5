import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API = "http://localhost:8080/customers";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getAll(page): Observable<any> {
    // return this.http.get('http://localhost:3000/customer');
    return this.http.get(API+"?page="+ page);

  }

  create(customer: Customer) {
    return this.http.post(API + '/add', customer);

  }

  findById(id: number): Observable<any> {
    return this.http.get('http://localhost:3000/customer/' + id);
  }

  // update(customer: Customer) {
  //   return this.http.patch('http://localhost:3000/customer/' + customer.id, customer);
  // }

  // delete(customer: Customer) {
  //   return this.http.delete('http://localhost:3000/customer/' + customer.id);
  // }
  delete(id: number) {
    return this.http.delete( API + `/delete/${id}`);
  }

  search(name: string, phone: string, email: string, typeName: string, page): Observable<any> {
    // return this.http.get(`http://localhost:3000/customer?name_like=${name}&phoneNumber_like=${phone}&email_like=${email}&customerType.id_like=${id}`);
    return this.http.get(API+`?page=${page}&nameSearch=${name}&customerTypeName=${typeName}&phoneSearch=${phone}&emailSearch=${email}`);
  }


  searchMulti(keyword): Observable<any> {
    return this.http.get('http://localhost:3000/customer?q=' + keyword);
  }

}
