import { unsupported } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
interface Tarefa{

  nome: string;
  descricao: string;
  categoria: string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.tarefas = JSON.parse(localStorage.getItem('listaDeTarefas'))
  }
  title = 'todo-app';

  tarefas: Tarefa [] = [];



  teste: Tarefa = {

    nome: '',
    descricao:'',
    categoria: ''

  }

  contador: number = 0;
  
  cadastrarTarefa():void{
    const novaTarefa: Tarefa = {
      nome: this.teste.nome,
      descricao: this.teste.descricao,
      categoria: this.teste.categoria,
      
    };
    let listaLocalStorage = JSON.parse(localStorage.getItem('listaDeTarefas'))
    if(listaLocalStorage == null)[
      listaLocalStorage = []
    ]
    listaLocalStorage.push(novaTarefa)
    localStorage.setItem("listaDeTarefas",JSON.stringify(listaLocalStorage))  

    this.tarefas.push(novaTarefa);

    this.teste.nome = '';
    this.teste.descricao = '';
    this.teste.categoria = '';

  }
  deletaTarefa(indice):void{

    this.tarefas.splice(indice,1);
    localStorage.setItem("listaDeTarefas",JSON.stringify(this.tarefas))

  }

  addCategoriaTODO(teste):string{

    return teste.categoria = "TODO"
    localStorage.setItem("listaDeTarefas",JSON.stringify(this.tarefas))

  }
  addCategoriaDOING(teste):string{

    return teste.categoria = "DOING"
    localStorage.setItem("listaDeTarefas",JSON.stringify(this.tarefas))

  }
  addCategoriaDONE(teste):string{

    return teste.categoria = "DONE"
    localStorage.setItem("listaDeTarefas",JSON.stringify(this.tarefas))

  }
  categoriaTODO(Tarefa):string{

    return Tarefa.categoria = "TODO"
    localStorage.setItem("listaDeTarefas",JSON.stringify(this.tarefas))

  }
  categoriaDOING(Tarefa):string{

    return Tarefa.categoria = "DOING"
    localStorage.setItem("listaDeTarefas",JSON.stringify(this.tarefas))

  }
  categoriaDONE(Tarefa):string{

    return Tarefa.categoria = "DONE"
    localStorage.setItem("listaDeTarefas",JSON.stringify(this.tarefas))

  }

  mostraInput: boolean = true;

  esconderInput():void{

    this.mostraInput = false

  };
  mostrarInput():void{

    this.mostraInput = true

  };





}
