import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  users: User[] = [];
  user:User=new User();
  constructor(private router:Router,private service:ServiceService) { }
  
  ngOnInit(): void {
    
    this.Search();
  }

  Edit(user:User){
    localStorage.setItem("id",user.id.toString());
    this.router.navigate(["user/edit"]);
  }

  DeleteUser(user:User){
    this.service.deleteUser(user).subscribe(data=>{
      alert("Delete Successful");
      this.router.navigate(["user/list"]);
      this.users=this.users.filter(p=>p!==user);
    })
  }

  Search(){
    let idd=localStorage.getItem("id") ;
    console.log(idd);
    this.service.getUserCc(idd).subscribe(data=>{this.users=data;})
  }

}


