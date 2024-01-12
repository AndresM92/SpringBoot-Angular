import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../app/Service/service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './User/add/add.component';
import { EditComponent } from "./User/edit/edit.component";
import { ListComponent } from './User/list/list.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './User/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    ListComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
