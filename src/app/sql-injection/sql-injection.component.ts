import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-sql-injection',
  templateUrl: './sql-injection.component.html',
  styleUrls: ['./sql-injection.component.css']
})
export class SqlInjectionComponent implements OnInit {

  constructor(private router:Router,
    public form: FormBuilder,
    private sharedService: SharedService ) { }

  //if its hard level its true. Use to set difficult of the vulnerability test.

  level: string;
  hard: boolean;
  public filmForm: FormGroup;

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
    console.log(this.level +" "+this.hard+" "+form.directorName);
  }

}
