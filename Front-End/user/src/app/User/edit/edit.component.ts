
import { ServiceService } from './../../Service/service.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';


import { AddComponent } from '../add/add.component';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user:User=new User();
  a=false;
  constructor(private router:Router,private service:ServiceService) { }

  formRegis=new FormGroup({
    cc: new FormControl('',Validators.compose([Validators.required,Validators.maxLength(12),Validators.pattern('^[0-9]+$')])),
    name: new FormControl('',Validators.compose([Validators.required,Validators.maxLength(7),Validators.pattern('^[a-zA-Z]+$')])),
    last_name: new FormControl('',Validators.compose([Validators.required,Validators.maxLength(10),Validators.pattern('^[a-zA-Z]+$')])),
    age: new FormControl('',Validators.compose([Validators.required,Validators.maxLength(2),Validators.pattern('^[0-9]+$')])),
    number_phone: new FormControl('',Validators.compose([Validators.required,Validators.maxLength(10),Validators.pattern('^[0-9]+$')])),
    email: new FormControl('',Validators.compose([Validators.required,Validators.maxLength(30),Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
  });

  ngOnInit(): void {
    this.Edit();
  }

  get cc() { return this.formRegis.get('cc'); }
     
  get name() { return this.formRegis.get('name'); }

  get last_name() { return this.formRegis.get('last_name'); }

  get age() { return this.formRegis.get('age'); }

  get number_phone() { return this.formRegis.get('number_phone'); }

  get email() { return this.formRegis.get('email'); }


  Edit(){
    
    let id=localStorage.getItem("id") ;
    this.service.getUserId(+id).subscribe(data=>{this.user=data;})

  }

  Update(User:User){

    if(this.formRegis.valid){
      this.service.updateUser(this.user).subscribe(data=>{
        this.user=data;
        alert("Update Successful");
        this.router.navigate(["user/list"]);
      })
      this.a=false;
    }
    else{
      this.a=true;
    }


    
       
  }
}
