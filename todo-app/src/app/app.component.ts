import { unsupported } from '@angular/compiler/src/render3/view/util';
import { Component } from '@angular/core';
interface Tarefa{

  nome: string;
  categoria: string;
  index: number;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo-app';

  tarefas: Tarefa [] = [];



  teste: Tarefa = {

    nome: '',
    categoria: '',
    index: null

  }

  contador: number = 0;
  
  cadastrarTarefa():void{
    const novaTarefa: Tarefa = {
      nome: this.teste.nome,
      categoria: this.teste.categoria,
      index: this.tarefas.length
    };

    this.tarefas.push(novaTarefa);

    this.teste.nome = '';
    this.teste.categoria = '';

  }
  deletaTarefa(index):void{

    this.tarefas.splice(index,1);

  }

  addCategoriaTODO(teste):string{

    return teste.categoria = "TODO"

  }
  addCategoriaDOING(teste):string{

    return teste.categoria = "DOING"

  }
  addCategoriaDONE(teste):string{

    return teste.categoria = "DONE"

  }
  categoriaTODO(Tarefa):string{

    return Tarefa.categoria = "TODO"

  }
  categoriaDOING(Tarefa):string{

    return Tarefa.categoria = "DOING"

  }
  categoriaDONE(Tarefa):string{

    return Tarefa.categoria = "DONE"

  }

  mostraInput: boolean = true;

  esconderInput():void{

    this.mostraInput = false

  };
  mostrarInput():void{

    this.mostraInput = true

  };

}
