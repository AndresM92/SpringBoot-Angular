import { SearchComponent } from './User/search/search.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './User/add/add.component';




const routes: Routes = [
  
 
  {path:'',redirectTo:'user',pathMatch:'full'},
  { path: 'user', loadChildren: () => import('./User/user/user.module').then(m => m.UserModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
