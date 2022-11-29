import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.paramMap.subscribe(paramap=> {
      let id = +paramap.get('id');
      this.productService.deleteById(id).subscribe(() => {
        this.router.navigateByUrl("");
      })
    })
  }

  ngOnInit(): void {
  }

}
