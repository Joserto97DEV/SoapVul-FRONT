import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandInjectionComponent } from './command-injection/command-injection.component';
import { InitComponent } from './init/init.component';
import { SoapArrayAbuseComponent } from './soap-array-abuse/soap-array-abuse.component';
import { SqlInjectionComponent } from './sql-injection/sql-injection.component';
import { XssComponent } from './xss/xss.component';


const routes: Routes = [
  {path: '',component: InitComponent},
  {path: 'sqlInjection', component: SqlInjectionComponent},
  {path: 'xss', component: XssComponent},
  {path: 'ci', component: CommandInjectionComponent},
  {path: 'saa', component: SoapArrayAbuseComponent},
  {path: '**',component: InitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
