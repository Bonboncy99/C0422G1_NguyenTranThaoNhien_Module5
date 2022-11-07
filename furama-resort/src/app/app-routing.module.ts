import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListCustomerComponent} from './component/customer/list-customer/list-customer.component';
import {AddCustomerComponent} from './component/customer/add-customer/add-customer.component';
import {UpdateCustomerComponent} from './component/customer/update-customer/update-customer.component';
import {ContractComponent} from './component/contract/contract.component';
import {UpdateFacilityComponent} from './component/facility/update-facility/update-facility.component';
import {AddFacilityComponent} from './component/facility/add-facility/add-facility.component';
import {ListFacilityComponent} from './component/facility/list-facility/list-facility.component';
import {EmployeeComponent} from './component/employee/employee.component';
import {HomeComponent} from './component/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'customer', component: ListCustomerComponent},
  {path: 'customer/add', component: AddCustomerComponent},
  {path: 'customer/edit/:id', component: UpdateCustomerComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'facility', component: ListFacilityComponent},
  {path: 'facility/add', component: AddFacilityComponent},
  {path: 'facility/edit/:id', component: UpdateFacilityComponent},
  {path: 'contract', component: ContractComponent},
  // {path: 'customer/delete', component: ListCustomerComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
