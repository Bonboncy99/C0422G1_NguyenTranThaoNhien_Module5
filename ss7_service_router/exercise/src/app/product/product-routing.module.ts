import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductCreateComponent} from "./product-create/product-create.component";
import {UpdateProductComponent} from "./update-product/update-product.component";
import {DeleteProductComponent} from "./delete-product/delete-product.component";


const routes: Routes = [
  {
    path: 'list',
    component: ProductListComponent
  }, {
    path: 'create',
    component: ProductCreateComponent
  }, {
    path: 'edit/:id',
    component: UpdateProductComponent
  }, {
    path: 'delete/:id',
    component: DeleteProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
