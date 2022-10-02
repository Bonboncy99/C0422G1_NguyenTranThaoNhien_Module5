import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productUpdate: Product;
  idUpdate;
  updateProductForm: FormGroup;
  categoryList: Category[] = [];

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute,
              private router: Router, private categoryService: CategoryService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.idUpdate = parseInt(paramMap.get('id'));
    })
    this.categoryService.getAll().subscribe(categoryList => {
        this.categoryList = categoryList;
      })
  }

  ngOnInit(): void {
    this.oldValue(this.idUpdate)

  }

  getForm() {
    this.updateProductForm = new FormGroup({
      name: new FormControl(this.productUpdate.name),
      price: new FormControl(this.productUpdate.price),
      description: new FormControl(this.productUpdate.description),
      category: new FormControl(this.productUpdate.category)
    })

  }

  oldValue(id) {
    this.productService.findById(id).subscribe(product => {
      this.productUpdate = product;
    }, () => {

    }, () => {
      this.getForm();
    })
  }


  submid() {
    console.log(this.updateProductForm.value)
    const product = this.updateProductForm.value;
    product.id = this.productUpdate.id;
    this.productService.updateProduct(product.id, product).subscribe(next => {
      this.router.navigateByUrl('product/list');
    });
  }
}
