import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

import { NgxSoapService, Client, ISoapMethodResponse } from 'ngx-soap';

@Component({
  selector: 'app-soap-array-abuse',
  templateUrl: './soap-array-abuse.component.html',
  styleUrls: ['./soap-array-abuse.component.css']
})
export class SoapArrayAbuseComponent implements OnInit {

  constructor(private router:Router,
    public form: FormBuilder,
    private sharedService: SharedService,
    private soap: NgxSoapService){
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

  ngOnInit() {

    this.filmForm = this.form.group({
      params: new FormArray([
        new FormControl('', Validators.required)
      ])
    });
  }


  get params(): FormArray {
    return this.filmForm.get('params') as FormArray;
  }


  addParamField(index) { 
    if(this.params.status=="INVALID"){
      return;
    }
    this.params.push(new FormControl('', Validators.required)); 
  }

  deleteParamsField(index: number) {
    if (this.params.length !== 1) { 
      this.params.removeAt(index); 
    }
  }

  showAll(){
    const body = {
      director: "' or '1'='1"
    };
    this.apiCallAll(body);
  }

  showByParams(filmForm){

    const body ={
      ParamsArray: filmForm.params
    }
    console.log(filmForm.params);
    this.apiCallAllParams(body);
  }

  apiCallAll(body){
    (<any>this.client).GetFilmByDirector(body).subscribe((res: ISoapMethodResponse) => {
      this.filmIsEmpty=false;

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

  apiCallAllParams(body){
    (<any>this.client).GetFilmByParams(body).subscribe((res: ISoapMethodResponse) => {
      this.filmIsEmpty=false;

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
