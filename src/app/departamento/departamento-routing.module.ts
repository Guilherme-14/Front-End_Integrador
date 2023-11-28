import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarDepartamentoComponent } from './listar-departamento/listar-departamento.component';
import { DepartamentoFormComponent } from './form-departamento/form-departamento.component';
const routes: Routes = [
  {path:'', component: ListarDepartamentoComponent},
  {path:"novo", component: DepartamentoFormComponent},
  {path:"editar/id", component: DepartamentoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartamentoRoutingModule { }
