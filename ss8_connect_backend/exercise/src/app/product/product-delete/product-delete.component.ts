import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute, private router:Router) {
    activatedRoute.paramMap.subscribe((paramMap:ParamMap)=>{
      let id = paramMap.get("id");
      this.productService.deleteById(parseInt(id)).subscribe(next=>{
        router.navigateByUrl('product/list');
      });
    })
  }

  ngOnInit(): void {
  }
}
