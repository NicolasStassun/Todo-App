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
    this.todo = JSON.parse(localStorage.getItem('listaTODO'))
    this.doing = JSON.parse(localStorage.getItem('listaDOING'))
    this.done = JSON.parse(localStorage.getItem('listaDONE'))

    if(!this.todo){

      this.todo = [];

    }
    if(!this.doing){

      this.doing = [];

    }
    if(!this.done){

      this.done = [];

    }
    
  }



  title = 'todo-app';

  tarefas: Tarefa [] = [];

  todo: Tarefa [] = [];

  done: Tarefa [] = [];

  doing: Tarefa [] = [];

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

    this.verificacaoDeListas(novaTarefa)

    this.teste.nome = '';
    this.teste.descricao = '';
    this.teste.categoria = '';

  }

  trocaListaTodo(todos,indice):void{

    this.verificacaoDeListas(todos)

    this.todo.splice(indice,1);

    localStorage.setItem("listaTODO",JSON.stringify(this.todo))  

  }
  trocaListaDoing(doings,indice):void{

    this.verificacaoDeListas(doings)

    this.doing.splice(indice,1);

    localStorage.setItem("listaDOING",JSON.stringify(this.doing))  

  }
  trocaListaDone(done,indice):void{

    this.verificacaoDeListas(done)

    this.done.splice(indice,1);

    localStorage.setItem("listaDONE",JSON.stringify(this.done))  

  }

  updateListaTodo():void{

    localStorage.setItem("listaTODO",JSON.stringify(this.todo))  

  }
  updateListaDoing():void{

    localStorage.setItem("listaDOING",JSON.stringify(this.doing))

  }
  updateListaDone():void{

    localStorage.setItem("listaDONE",JSON.stringify(this.done))  

  }
  
  deletaTodo(indice):void{

    this.todo.splice(indice,1);
    
    this.updateListaTodo();

    localStorage.setItem("listaTODO",JSON.stringify(this.todo))

  }
  deletaDoing(indice):void{

    this.doing.splice(indice,1);
    this.updateListaDoing();

    localStorage.setItem("listaDOING",JSON.stringify(this.doing))

  }
  deletaDone(indice):void{

    this.done.splice(indice,1);
    this.updateListaDone();
    localStorage.setItem("listaDONE",JSON.stringify(this.done))

  }

  verificacaoDeListas(novaTarefa):void{

    if(novaTarefa.categoria == 'TODO'){

      this.todo.push(novaTarefa)

      let todoLocalStorage = JSON.parse(localStorage.getItem('listaTODO'))
      if(todoLocalStorage == null)[
      todoLocalStorage = []
      ]
      todoLocalStorage.push(novaTarefa)
      localStorage.setItem("listaTODO",JSON.stringify(todoLocalStorage))  

    }
    else if(novaTarefa.categoria == 'DOING'){

      this.doing.push(novaTarefa)

      let doingLocalStorage = JSON.parse(localStorage.getItem('listaDOING'))
      if(doingLocalStorage == null)[
      doingLocalStorage = []
      ]
      doingLocalStorage.push(novaTarefa)
      localStorage.setItem("listaDOING",JSON.stringify(doingLocalStorage)) 

    }
    else if(novaTarefa.categoria == 'DONE'){

      this.done.push(novaTarefa)

      let doneLocalStorage = JSON.parse(localStorage.getItem('listaDONE'))
      if(doneLocalStorage == null)[
      doneLocalStorage = []
      ]
      doneLocalStorage.push(novaTarefa)
      localStorage.setItem("listaDONE",JSON.stringify(doneLocalStorage)) 

    }

  }
  trocaBooleanTarefa():boolean{

    if(this.cadastrarTarefaBoolean==false){

      console.log(this.cadastrarTarefaBoolean)
      this.nomeCadastroTarefa = "Cancelar Tarefa"
      this.cadastrarCategoriaBoolean = false
      return this.cadastrarTarefaBoolean = true


    }
    if(this.cadastrarTarefaBoolean==true){

      console.log(this.cadastrarTarefaBoolean)
      this.nomeCadastroTarefa = "Adicionar Tarefa"
      return this.cadastrarTarefaBoolean = false

    }

  }


  cadastrarTarefaBoolean: boolean = false;
  nomeCadastroTarefa: string = "Adicionar Tarefa";

  trocaBooleanCategoria():boolean{

    if(this.cadastrarCategoriaBoolean==false){

      console.log(this.cadastrarCategoriaBoolean)
      this.nomeCadastroCategoria = "Cancelar Categoria"
      this.cadastrarTarefaBoolean = false;
      return this.cadastrarCategoriaBoolean = true


    }
    if(this.cadastrarCategoriaBoolean==true){

      console.log(this.cadastrarCategoriaBoolean)
      this.nomeCadastroCategoria = "Adicionar Categoria"
      return this.cadastrarCategoriaBoolean = false

    }

  }


  cadastrarCategoriaBoolean: boolean = false;
  nomeCadastroCategoria: string = "Adicionar Categoria";

}
