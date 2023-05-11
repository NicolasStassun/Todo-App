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
    this.categorias = JSON.parse(localStorage.getItem('listaDeCategorias'))

    if (!this.categorias || this.categorias.length === 0) {
      this.categorias = ['TODO', 'DOING', 'DONE'];
      localStorage.setItem('listaDeCategorias', JSON.stringify(this.categorias));
    }

    if(!this.tarefas){

      localStorage.setItem('listaDeTarefas', JSON.stringify(this.tarefas));

    }
  
  }

  title = 'todo-app';

  tarefas: Tarefa [] = [];

  teste: Tarefa = {

    nome: '',
    descricao:'',
    categoria: ''

  }

  categorias: string [] = [];

  novaCategoria: string

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

  numeroCategorias: number = 0;

  cadastrarCategoria(categoria): void{

    if(categoria!=""){

      this.categorias.push(categoria)
    
    let listaLocalStorageCategoria = JSON.parse(localStorage.getItem('listaDeCategorias'))
    if(listaLocalStorageCategoria == null)[
      listaLocalStorageCategoria = []
    ]
    listaLocalStorageCategoria.push(categoria)
    
    localStorage.setItem("listaDeCategorias",JSON.stringify(listaLocalStorageCategoria))

    

    console.log(categoria)

    this.novaCategoria = "";

    this.numeroCategorias ++;
  }

    
  }

  deletaTarefa(indice):void{

    this.tarefas.splice(indice,1);
    localStorage.setItem("listaDeTarefas",JSON.stringify(this.tarefas))
  }

  trocaBooleanTarefa():boolean{

    if(this.cadastrarTarefaBoolean==false){

      this.nomeCadastroTarefa = "Cancelar Tarefa"
      this.nomeCadastroCategoria = "Adicionar Categoria"
      this.cadastrarCategoriaBoolean = false
      return this.cadastrarTarefaBoolean = true


    }
    if(this.cadastrarTarefaBoolean==true){

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
      this.nomeCadastroTarefa = "Adicionar Tarefa"
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
