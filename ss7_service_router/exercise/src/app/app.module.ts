import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelinesComponent } from './timelines/timelines.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { DeleteProductComponent } from './product/delete-product/delete-product.component';
import { DictionaryListComponent } from './dictionary/dictionary-list/dictionary-list.component';
import { DictionaryDetailComponent } from './dictionary/dictionary-detail/dictionary-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    ProductListComponent,
    ProductCreateComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    DictionaryListComponent,
    DictionaryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
