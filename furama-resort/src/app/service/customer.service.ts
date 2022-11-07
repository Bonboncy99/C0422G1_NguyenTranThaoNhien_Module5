import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:3000/customer');
  }

  create(customer: Customer) {
    return this.http.post('http://localhost:3000/customer', customer);
  }

  findById(id: number): Observable<any> {
    return this.http.get('http://localhost:3000/customer/' + id);
  }

  update(customer: Customer) {
    return this.http.patch('http://localhost:3000/customer/' + customer.id, customer);
  }

  // delete(customer: Customer) {
  //   return this.http.delete('http://localhost:3000/customer/' + customer.id);
  // }
  delete(id: number) {
    return this.http.delete('http://localhost:3000/customer/' + id);
  }

  search(name: string, phone: string, email: string, id: string): Observable<any> {
    return this.http.get(`http://localhost:3000/customer?name_like=${name}&phoneNumber_like=${phone}&email_like=${email}&customerType.id_like=${id}`);
  }

  searchMulti(keyword): Observable<any> {
    return this.http.get('http://localhost:3000/customer?q=' + keyword);
  }

}
