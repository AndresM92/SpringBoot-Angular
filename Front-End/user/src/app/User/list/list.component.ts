import { User } from 'src/app/Models/User';
import { ServiceService } from './../../Service/service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: User[] = [];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
      this.service.getUser().subscribe(data=>{this.users=data;});
      
  }

  Edit(user:User){
    localStorage.setItem("id",user.id.toString());
    this.router.navigate(["user/edit"]);
  }

  DeleteUser(user:User){


    this.service.deleteUser(user).subscribe(data=>{
      
      this.users=this.users.filter(p=>p!==user);
      alert("Delete Successful");
      this.router.navigate(["user/list"]);
    })
  }

}
