import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {ProductListComponent} from "./product-list/product-list.component";
import {UpdateProductComponent} from "./update-product/update-product.component";
import {ProductCreateComponent} from "./product-create/product-create.component";
import {DeleteProductComponent} from "./delete-product/delete-product.component";


@NgModule({
  declarations: [
    ProductListComponent,
    UpdateProductComponent,
    ProductCreateComponent,
    DeleteProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
