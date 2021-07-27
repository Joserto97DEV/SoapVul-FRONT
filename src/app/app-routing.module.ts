import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitComponent } from './init/init.component';
import { SqlInjectionComponent } from './sql-injection/sql-injection.component';


const routes: Routes = [
  {path: '',component: InitComponent},
  {path: 'sqlInjection', component: SqlInjectionComponent},
  {path: '**',component: InitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
