import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import {FormsModule} from '@angular/forms';
import { PetInfoComponent } from './pet-info/pet-info.component';
import { ProductComponent } from './product/product.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PickColorAppComponent } from './pick-color-app/pick-color-app.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    PetInfoComponent,
    ProductComponent,
    CalculatorComponent,
    PickColorAppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
