import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {

  public selectForm: FormGroup;
  levelList: string[] =["Easy","Hard"];
  vulnerabilityList: string[] = ["SQL Injection", "SOAP Array Abuse", "CSRF"];
  level: string; 
  vulnerability: string; 
  
    constructor(
    public form: FormBuilder,
    private router:Router) { }


  ngOnInit() {

    this.selectForm = this.form.group({
      level:[],
      vulnerability:[]
    });

    this.selectForm.patchValue({
      level: 'Easy',
      vulnerability: 'SQL Injection'
   });
  }
  
  
  nivel: string = null;
  vulnerabilidad: string = null;
  
  
  select(form) {
    this.level = form.level;
    this.vulnerability = form.vulnerability;
    alert(this.level+" " +this.vulnerability);
  }
  
  
    
  
  

}
