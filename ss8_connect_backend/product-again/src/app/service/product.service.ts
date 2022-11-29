import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:3000/products');
  }

  create(product): Observable<any> {
     return this.http.post('http://localhost:3000/products', product);
  }

  findById(id: number): Observable<any> {
    return this.http.get('http://localhost:3000/products/' + id);
  }

  update(id,product): Observable<any> {
     return this.http.patch('http://localhost:3000/products/'+id, product);
  }
  delete(product):Observable<any>{
     return this.http.delete('http://localhost:3000/products/' + product.id);
  }
  deleteById(id):Observable<any>{
    return this.http.delete('http://localhost:3000/products/' +id);
  }
}
