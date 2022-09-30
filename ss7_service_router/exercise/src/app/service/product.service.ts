import {Injectable} from '@angular/core';
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // product:Product;
  productList: Product[] = [{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    description: '97%'
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }];

  constructor() {
  }

  getAll() {
    return this.productList;
  }
  saveProduct(product:Product){
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id == product.id){
        this.productList.splice(i,1,product)
        return;
      }
    }
    this.productList.push(product);
  }
  findById(number:number){
    let product = this.productList.find(product=>product.id ===number)
    return product;
  }
  deleteById(id:number){
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id==id){
        this.productList.splice(i,1);
      }
    }
  }
}
