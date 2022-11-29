import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './component/home/home.component';
import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';
import { ListFacilityComponent } from './component/facility/list-facility/list-facility.component';
import { AddFacilityComponent } from './component/facility/add-facility/add-facility.component';
import { UpdateFacilityComponent } from './component/facility/update-facility/update-facility.component';
import { ListCustomerComponent } from './component/customer/list-customer/list-customer.component';
import {AddCustomerComponent} from './component/customer/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './component/customer/update-customer/update-customer.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { ContractComponent } from './component/contract/contract.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ListFacilityComponent,
    AddFacilityComponent,
    UpdateFacilityComponent,
    ListCustomerComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    EmployeeComponent,
    ContractComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
