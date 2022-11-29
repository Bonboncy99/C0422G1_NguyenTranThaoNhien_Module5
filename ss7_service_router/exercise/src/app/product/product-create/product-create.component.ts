import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
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

  constructor(private  productService: ProductService, private router:Router) {
  }

  ngOnInit(): void {
  }

  submid(){
    const product = this.createProductForm.value;
    this.productService.createProduct(product).subscribe(next=>{
      this.router.navigateByUrl('product/list');
    })
    this.createProductForm.reset();
  }
}
