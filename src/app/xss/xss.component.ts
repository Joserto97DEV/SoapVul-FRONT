import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSoapService, Client, ISoapMethodResponse } from 'ngx-soap';
import { SharedService } from '../services/shared.service';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'



@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
  styleUrls: ['./xss.component.css']
})


export class XssComponent implements OnInit {


  constructor(private router:Router,
    public form: FormBuilder,
    private sharedService: SharedService,
    private soap: NgxSoapService,
    private sanitizer: DomSanitizer){
      this.soap.createClient('http://localhost:8080/services/film.wsdl').then(client => this.client = client);
  }


  //if its hard level its true. Use to set difficult of the vulnerability test.
  level: string;
  hard: boolean;
  public filmForm: FormGroup;
  client: Client;
  /*List of the films*/
  films = [];
  /*Find complete*/
  findDone=false;
  /*not films*/
  filmIsEmpty=false;
  /*director name*/
  director;

  ngOnInit() {
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
      director: form.directorName
    };
    this.apiCall(body);
  }

  apiCall(body){
    (<any>this.client).GetFilmByDirector(body).subscribe((res: ISoapMethodResponse) => {
      this.filmIsEmpty=false;

      var elemento=document.getElementById('xss').innerHTML="You have serch by: "+body.director;
      if(res.result===null){
        this.filmIsEmpty=true;
      }
      else{
        res.result.Films.forEach(element => {
          this.films.push(element);
        });  
        this.findDone=true;
      }
      console.log(res.result.Films)
    });
  }

  goInitComponent(){
    this.findDone=false;
    this.films=[];
    this.filmIsEmpty=false;
    this.filmForm.reset();
  }


}
