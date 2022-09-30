import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimelinesComponent} from "./timelines/timelines.component";
import {YoutubePlaylistComponent} from "./youtube-playlist/youtube-playlist.component";
import {YoutubePlayerComponent} from "./youtube-player/youtube-player.component";
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {DictionaryListComponent} from "./dictionary/dictionary-list/dictionary-list.component";
import {DictionaryDetailComponent} from "./dictionary/dictionary-detail/dictionary-detail.component";
import {UpdateProductComponent} from "./product/update-product/update-product.component";
import {DeleteProductComponent} from "./product/delete-product/delete-product.component";


const routes: Routes = [
  // {
  //   path: 'timelines',
  //   component: TimelinesComponent
  // },

  // {
  //   path:'youtube',
  //   component:YoutubePlaylistComponent,
  //   children: [{
  //     path:':id',
  //     component: YoutubePlayerComponent
  //   }]
  // },

  {
    path:'product/list',
    component: ProductListComponent
  },
  {
    path:'product/create',
    component: ProductCreateComponent
  },
  {
    path:'product/edit/:id',
    component: UpdateProductComponent
  },
  {
    path:'product/edit/:id',
    component: UpdateProductComponent
  },
  {
    path:'product/delete/:id',
    component: DeleteProductComponent
  },



  {path:'dictionary',
  component:DictionaryListComponent
  },
  {path:'dictionary/:word',
    component:DictionaryDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
