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
  product: Product;
  updateProductForm: FormGroup;
  categoryList: Category[] = [];
  idUpdate:number;
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute,
              private router: Router, private categoryService: CategoryService) {
    activatedRoute.paramMap.subscribe((paramMap:ParamMap)=>{
        this.idUpdate= +paramMap.get('id');
    },()=>{

      },()=>{
      categoryService.findById(this.idUpdate).subscribe(product=>{
        this.product = product;
      },()=>{

      },()=>{
        this.oldProduct();
        this.categoryService.getAll().subscribe(categoryList=>{
          this.categoryList = categoryList;
        })
      })
      })
  }

  ngOnInit()
    :
    void {
  }

    oldProduct()
    {
      this.updateProductForm = new FormGroup({
        id: new FormControl(this.product.id),
        name: new FormControl(this.product.name),
        price: new FormControl(this.product.price),
        description: new FormControl(this.product.description),
        category: new FormControl(this.product.category)
      })
    }

    submid()
    {
      console.log(this.updateProductForm.value)
      const product = this.updateProductForm.value;
      this.productService.updateProduct(product.id, product).subscribe(next => {
        this.router.navigateByUrl('product/list');
      });
    }

  }
