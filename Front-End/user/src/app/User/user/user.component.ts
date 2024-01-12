import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  textoDeInput="";
  constructor(private router:Router) { }

  s= new FormGroup ({
    cc: new FormControl('',Validators.compose([Validators.required,Validators.maxLength(12),Validators.pattern('^[0-9]+$')]))
  });

  List(){
    this.router.navigate(["list"]);
  }

  Add(){
    this.router.navigate(["add"]);
  }

  Search(){
    localStorage.setItem("id",this.textoDeInput.toString());
    this.router.navigate(["user/search"]);
  }

  ngOnInit(): void {
  }

  get cc() { return this.s.get('cc'); }
}
