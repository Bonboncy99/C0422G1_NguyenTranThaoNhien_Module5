import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

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
