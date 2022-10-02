import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categories: Category[] = [];
  createProductForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });

  constructor(private  productService: ProductService, private router: Router, private categoryService: CategoryService) {
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    })
  }

  ngOnInit(): void {

  }

  submid() {
    const product = this.createProductForm.value;
    this.productService.createProduct(product).subscribe(() => {
      this.router.navigateByUrl('product/list')
    })
  }
}
