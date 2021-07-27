import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private router:Router) { }

  public resetComponentAndRedirectInit() {
    localStorage.clear();
    this.router.navigate(['']);

  }
}
