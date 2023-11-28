import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentoModule } from './departamento/departamento.module';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:''},
  {path:'departamento', loadChildren:()=> DepartamentoModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
