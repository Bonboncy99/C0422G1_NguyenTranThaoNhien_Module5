import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from 'ngx-pagination';
import {ReactiveFormsModule} from "@angular/forms";
import { VehicalListComponent } from './component/vehicle/vehical-list/vehical-list.component';
import { VehicalUpdateComponent } from './component/vehicle/vehical-update/vehical-update.component';
import { VehicalCreateComponent } from './component/vehicle/vehical-create/vehical-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    VehicalListComponent,
    VehicalUpdateComponent,
    VehicalCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
