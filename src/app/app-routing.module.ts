import { StoreComponent } from './store/store.component';
import { BukregisterComponent } from './bukregister/bukregister.component';
import { BukloginComponent } from './buklogin/buklogin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',component:BukloginComponent
  },

  {
    path:'bukregister',component:BukregisterComponent
  },
  {
    path:'store',component:StoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
