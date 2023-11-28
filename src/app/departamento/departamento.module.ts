import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentoRoutingModule } from './departamento-routing.module';
import { ListarDepartamentoComponent } from './listar-departamento/listar-departamento.component';



@NgModule({
  declarations: [
    ListarDepartamentoComponent
  ],
  imports: [
    CommonModule,
    DepartamentoRoutingModule
  ]
})
export class DepartamentoModule { }
