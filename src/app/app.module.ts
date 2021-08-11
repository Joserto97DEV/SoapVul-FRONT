import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitComponent } from './init/init.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SqlInjectionComponent } from './sql-injection/sql-injection.component';

import { NgxSoapModule, NgxSoapService} from 'ngx-soap';
import { XssComponent } from './xss/xss.component';
import { CommandInjectionComponent } from './command-injection/command-injection.component';



@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    SqlInjectionComponent,
    XssComponent,
    CommandInjectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSoapModule
  ],
  providers: [NgxSoapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
