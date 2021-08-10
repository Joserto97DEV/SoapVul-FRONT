import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitComponent } from './init/init.component';
import { SqlInjectionComponent } from './sql-injection/sql-injection.component';
import { XssComponent } from './xss/xss.component';


const routes: Routes = [
  {path: '',component: InitComponent},
  {path: 'sqlInjection', component: SqlInjectionComponent},
  {path: 'xss', component: XssComponent},
  {path: '**',component: InitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
