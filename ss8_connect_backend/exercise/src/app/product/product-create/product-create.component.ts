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
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });

  constructor(private  productService: ProductService, private router:Router,private categoryService:CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(categories=>{
      this.categories = categories;
    })
  }

  submid(){
    const product = this.createProductForm.value;
    this.categoryService.findById(this.createProductForm.value.category).subscribe(categorySearch=>{
      product.category = categorySearch;
      },error => {
      this.productService.createProduct(product).subscribe(next=>{
        this.router.navigateByUrl('product/list');
        this.createProductForm.reset();
      })
    },() => {
    })

  }
}
