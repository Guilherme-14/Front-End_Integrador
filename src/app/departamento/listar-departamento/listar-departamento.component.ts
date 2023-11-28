import { Component, OnInit } from '@angular/core';
import { Idepartamento } from '../Service/idepartamento';
import { DepartamentoService } from '../Service/departamento.service';
import { ActivatedRoute, Router} from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-listardepartamento',
  templateUrl: './listar-departamento.component.html',
  styleUrls: ['./listar-departamento.component.scss']
})
export class ListarDepartamentoComponent implements OnInit{
  departamento: Idepartamento[]=[];
  
  form = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(''),
    localidade: new FormControl(''),
    descricaoAtividades: new FormControl(''),
    email: new FormControl(''),
})

  constructor(
    private service: DepartamentoService, 
    private router: Router, 
    private route: ActivatedRoute){ }

  ngOnInit(): void {
     this.Listar();
  }

  Listar(){
     // a minha variavel do tipo cursos está recebendo o json da API
     this.service.listar().subscribe(dados => this.departamento = dados);
  }

  Editar(id:number){
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }

  Excluir(id:number){
    this.service.excluir(id).subscribe(
      success => {
        alert("Curso excluido com sucesso!")
        this.service.listar().subscribe(dados => this.departamento = dados);
      },
      Error => alert("Erro ao excluir o curso ")
    );
  }
}

