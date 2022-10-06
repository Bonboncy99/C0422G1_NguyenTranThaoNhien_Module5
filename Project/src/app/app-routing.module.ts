import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {VehicalListComponent} from "./component/vehicle/vehical-list/vehical-list.component";
import {VehicalUpdateComponent} from "./component/vehicle/vehical-update/vehical-update.component";
import {VehicalCreateComponent} from "./component/vehicle/vehical-create/vehical-create.component";


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'list', component:VehicalListComponent},
  {path:'create', component:VehicalCreateComponent},
  {path:'update/:id', component:VehicalUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
