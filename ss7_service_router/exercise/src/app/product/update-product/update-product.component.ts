import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Product} from "../../model/product";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  product: Product;
  updateProductForm: FormGroup;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute,
              private router: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.productService.findById(parseInt(id)).subscribe(product=>{
        console.log(product)
        this.product = product;
      });
      this.updateProductForm = new FormGroup({
        id: new FormControl(this.product.id),
        name: new FormControl(this.product.name),
        price: new FormControl(this.product.price),
        description: new FormControl(this.product.description)
      });
    })
  }

  ngOnInit(): void {
  }


  submid() {
    console.log(this.updateProductForm.value)
    const product = this.updateProductForm.value;
    this.productService.updateProduct(product.id,product).subscribe(next=>{
      this.router.navigateByUrl('product/list');
    });
  }
}
