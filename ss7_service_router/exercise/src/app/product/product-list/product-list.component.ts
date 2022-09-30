import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  productSearch: Product;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.productList = this.productService.getAll();
  }
}
