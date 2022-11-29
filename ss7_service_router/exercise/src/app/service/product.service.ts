import {Injectable} from '@angular/core';
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: Product[] = [];


  constructor(private http: HttpClient) {
  }

  getAll():any {
    return this.http.get('http://localhost:3000/products');
  }

  findById(number: number) {
    return this.http.get('http://localhost:3000/products/' + number);
  }

  createProduct(product: Product) {
    return this.http.post('http://localhost:3000/products', product);
  }
  updateProduct(id:number,product: Product) {
    return this.http.patch('http://localhost:3000/products/'+ id, product);
  }


  deleteById(id: number) {
    return this.http.delete('http://localhost:3000/products/'+ id);
  }
}
