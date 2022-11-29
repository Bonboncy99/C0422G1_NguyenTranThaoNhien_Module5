import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../model/product';
import {Category} from '../../model/category';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  idUpdate: number;
  updateProduce: Product;
  categoryList: Category[] = [];
  formUpdate: FormGroup;

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe(paramMap => {
      this.idUpdate = parseInt(paramMap.get('id'));
    });
    categoryService.getAll().subscribe(categoriesDt => {
      this.categoryList = categoriesDt;
    });
  }

  ngOnInit(): void {
    this.updateForm();
  }


  updateForm() {
    this.productService.findById(this.idUpdate).subscribe((productDt) => {
      this.updateProduce = productDt;
    }, () => {

    }, () => {
      this.makeForm();
    });
  }

  makeForm() {
    this.formUpdate = new FormGroup({
      name: new FormControl(this.updateProduce.name),
      price: new FormControl(this.updateProduce.price),
      description: new FormControl(this.updateProduce.description),
      category: new FormControl(this.updateProduce.category)
    });
  }

  submit() {
    const product = this.formUpdate.value;
    this.productService.update(this.idUpdate, product).subscribe(() => {
       this.router.navigateByUrl('');
    });
  }
}
