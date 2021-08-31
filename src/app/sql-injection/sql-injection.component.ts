import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

import { NgxSoapService, Client, ISoapMethodResponse } from 'ngx-soap';
import { ThrowStmt } from '@angular/compiler';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-sql-injection',
  templateUrl: './sql-injection.component.html',
  styleUrls: ['./sql-injection.component.css']
})
export class SqlInjectionComponent implements OnInit {


  constructor(private router:Router,
    public form: FormBuilder,
    private sharedService: SharedService,
    private soap: NgxSoapService,
    private modalService: NgbModal){
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
  /*method of find*/
  findByDirectorMethod=false;

  directorList: string[] = ["Malcolm D. Lee", "Jaume Collet-Serra", "Santiago Segura", "Cate Shortland", "Everardo Gout", "M. Night Shyamalan"];

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
      director: form.directorName
    };
    this.findByDirectorMethod=true;
    if(this.level=="Easy"){
      this.apiCall(body);
    }
    else{
      this.apiSecureCall(body);
    }
  }

  showAll(){
    const body = {
      director: "' or '1'='1"
    };
    this.apiCall(body);
  }

  apiCall(body){
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
  apiSecureCall(body){
    (<any>this.client).GetFilmByDirectorSafe(body).subscribe((res: ISoapMethodResponse) => {
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
    this.findByDirectorMethod=false;
    this.filmForm.reset();
  }

  open(content,content2) {
    if(this.level=="Easy"){
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size:'lg'});
    }
    else{
      this.modalService.open(content2, {ariaLabelledBy: 'modal-basic-title', size:'lg'});
    }
  }
  
}
