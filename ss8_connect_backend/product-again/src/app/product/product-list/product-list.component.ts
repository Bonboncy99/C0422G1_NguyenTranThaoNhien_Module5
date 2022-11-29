import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.productService.getAll().subscribe(products => {
      this.productList = products;
    });
  }

  delete(product: Product) {
    this.productService.delete(product).subscribe(()=>{
      console.log(1);
      this.router.navigateByUrl('');
    },(err)=>{
      console.log(err);
    });
  }

}
