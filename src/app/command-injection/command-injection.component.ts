import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSoapService, Client, ISoapMethodResponse } from 'ngx-soap';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-command-injection',
  templateUrl: './command-injection.component.html',
  styleUrls: ['./command-injection.component.css']
})
export class CommandInjectionComponent implements OnInit {

  constructor(private router:Router,
    public form: FormBuilder,
    private sharedService: SharedService,
    private soap: NgxSoapService,
    ) { 
      this.soap.createClient('http://localhost:8080/services/ping.wsdl').then(client => this.client = client);
    }

  //if its hard level its true. Use to set difficult of the vulnerability test.
  level: string;
  hard: boolean;
  public pingForm: FormGroup;
  /*ping result*/
  pingResult=null;
  /*api client*/
  client: Client;
  /*ping done*/
  pingOk=false;




  ngOnInit() {
    this.level = localStorage.getItem('level');
    //if(localStorage.getItem('vulnerability')!='SQL Injection') this.router.navigate(['']);
    if(this.level =='hard') this.hard = true;
    else this.hard = false;

    this.pingForm = this.form.group({
      //      ipNumber: ['', Validators.required, Validators.maxLength(15),Validators.minLength(7)]
      //TODO: IMPLementar validacion correcta ip
      ipNumber: ['', Validators.required]
    });
  }

  ping(form) {
    const body = {
      ipNumber: form.ipNumber
    };
    console.log(body)
    this.apiCall(body);
  }

  apiCall(body){
    (<any>this.client).GetPingIp(body).subscribe((res: ISoapMethodResponse) => {
      console.log(res.responseBody);
      if(res.responseBody.length>297){
        let result = res.responseBody;
        result = result.substring(217,result.length-1);
        result = result.substring(0,result.indexOf('<'))
        this.pingResult=result;
      }
      else{
        this.pingResult="No se ha podido ejecutar el ping correctamente";
      }
      this.pingOk=true;
    });
  }

}
