import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from '../add/add.component';
import { EditComponent } from '../edit/edit.component';
import { ListComponent } from '../list/list.component';
import { SearchComponent } from '../search/search.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {path: '', component: UserComponent},
  {path:'list',component:ListComponent},
  {path:'edit',component:EditComponent},
  {path:'add',component:AddComponent},
  {path:'search',component:SearchComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
