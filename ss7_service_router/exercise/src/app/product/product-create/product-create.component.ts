import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  createProductForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl()
  });

  constructor(private  productService: ProductService) {
  }

  ngOnInit(): void {
  }

  submid(){
    const product = this.createProductForm.value;
    this.productService.saveProduct(product)
    this.createProductForm.reset();
  }
}
