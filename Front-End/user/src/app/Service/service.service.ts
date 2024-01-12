import { Injectable } from '@angular/core';
import { User } from '../Models/User';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/user';
  Url2='http://localhost:8080/user/save';
  Url3='http://localhost:8080/user/list';
  Url4='http://localhost:8080/user/delete';
  Url5='http://localhost:8080/user/edit';
  Url6='http://localhost:8080/user/search';

  getUser(){
    return this.http.get<User[]>(this.Url);
    
  }

  createUser(user:User){
    return this.http.post<User>(this.Url2,user);
  }

  getUserId(id:number){
    return this.http.get<User>(this.Url3+"/"+id);
  }

  updateUser(user:User){
    return this.http.put<User>(this.Url5+"/"+user.id,user);
  }

  deleteUser(user:User){
    return this.http.delete<User>(this.Url4+"/"+user.id);
  }

  getUserCc(cc:String){
    return this.http.get<User[]>(this.Url6+"/"+cc);
  }

}
