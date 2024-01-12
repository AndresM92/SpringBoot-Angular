import { User } from './../../Models/User';


import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../../Service/service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

 user:User=new User();
 a=false;
  constructor(private router:Router,private service:ServiceService) { }

  formRegis=new FormGroup({
    cc: new FormControl('',Validators.compose([Validators.required,Validators.maxLength(12),Validators.pattern('^[0-9]+$')])),
    name: new FormControl('',Validators.compose([Validators.required,Validators.maxLength(7),Validators.pattern('^[a-zA-Z]+$')])),
    last_name: new FormControl('',Validators.compose([Validators.required,Validators.maxLength(11),Validators.pattern('^[a-zA-Z]+$')])),
    age: new FormControl('',Validators.compose([Validators.required,Validators.maxLength(1),Validators.pattern('^[0-9]+$')])),
    number_phone: new FormControl('',Validators.compose([Validators.required,Validators.maxLength(10),Validators.pattern('^[0-9]+$')])),
    email: new FormControl('',Validators.compose([Validators.required,Validators.maxLength(30),Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
  });

  ngOnInit(): void {
  }

  get cc() { return this.formRegis.get('cc'); }
     
  get name() { return this.formRegis.get('name'); }

  get last_name() { return this.formRegis.get('last_name'); }

  get age() { return this.formRegis.get('age'); }

  get number_phone() { return this.formRegis.get('number_phone'); }

  get email() { return this.formRegis.get('email'); }

  Save(){

    if (this.formRegis.valid){
    
      this.service.createUser(this.user).subscribe(data=>{
      alert("Save Successful");
      this.formRegis.reset();})
      this.a=false;}
    else{
      this.a=true;
    }    
  }
 
}
