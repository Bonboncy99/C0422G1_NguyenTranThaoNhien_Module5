import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categoryList: Category[] = [];
  createForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
  });

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) {
    this.categoryService.getAll().subscribe(data => {
      this.categoryList = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

  submid() {
    const product = this.createForm.value;
    this.productService.create(product).subscribe(() => {
      this.router.navigateByUrl('');
    }, (err) => {
      console.log(err);
    });

  }
}
