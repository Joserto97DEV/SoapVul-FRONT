import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

import { NgxSoapService, Client, ISoapMethodResponse } from 'ngx-soap';


@Component({
  selector: 'app-sql-injection',
  templateUrl: './sql-injection.component.html',
  styleUrls: ['./sql-injection.component.css']
})
export class SqlInjectionComponent implements OnInit {


  constructor(private router:Router,
    public form: FormBuilder,
    private sharedService: SharedService,
    private soap: NgxSoapService){
      this.soap.createClient('http://localhost:8080/service/estudiante.wsdl').then(client => this.client = client);
    }

  //if its hard level its true. Use to set difficult of the vulnerability test.
  level: string;
  hard: boolean;
  public filmForm: FormGroup;
  client: Client;
  message;


  ngOnInit() {
    
    console.log(this.soap);
    this.level = localStorage.getItem('level');
    //if(localStorage.getItem('vulnerability')!='SQL Injection') this.router.navigate(['']);
    if(this.level =='hard') this.hard = true;
    else this.hard = false;

    this.filmForm = this.form.group({
      directorName: ['', Validators.required]
    });
  }

  find(form) {

    const body = {
      idStudent: 0
    };
    (<any>this.client).GetStudentDetails(body).subscribe((res: ISoapMethodResponse) => {
      this.message = res;
      console.log(this.message.result);
    });
    
  }

}
