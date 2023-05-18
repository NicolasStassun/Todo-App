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

  

  numeroCategorias: number = this.categorias.length;

  cadastrarCategoria(categoria): void{

    if(categoria!= null){

      this.categorias.push(categoria)
    
    let listaLocalStorageCategoria = JSON.parse(localStorage.getItem('listaDeCategorias'))
    if(listaLocalStorageCategoria == null)[
      listaLocalStorageCategoria = []
    ]
    listaLocalStorageCategoria.push(categoria)
    
    localStorage.setItem("listaDeCategorias",JSON.stringify(listaLocalStorageCategoria))

    

    console.log(categoria)

    this.novaCategoria = "";
  }

    
  }

  deletaTarefa(indice):void{

    this.tarefas.splice(indice,1);
    localStorage.setItem("listaDeTarefas",JSON.stringify(this.tarefas))
  }

  verificacaoCategoriaExistente():void{

    for(let tarefa of this.tarefas){

      let categoriaExiste = true;

      for(let categoria of this.categorias){

        if(tarefa.categoria == categoria){

          categoriaExiste = true

        }
        else{

          categoriaExiste = false

        }

      }
      if(categoriaExiste == false){

        this.deletaTarefa(tarefa)
      }


    }

  }

  trocaBooleanTarefa():boolean{

    if(this.cadastrarTarefaBoolean==false){

      this.nomeCadastroTarefa = "Cancelar Tarefa"
      this.nomeCadastroCategoria = "Adicionar Categoria"
      this.cadastrarCategoriaBoolean = false
      this.removerCategoriaBoolean = false
      this.adicionarMostrarFiltroBoolean = false
      return this.cadastrarTarefaBoolean = true


    }
    if(this.cadastrarTarefaBoolean==true){

      this.nomeCadastroTarefa = "Adicionar Tarefa"
      return this.cadastrarTarefaBoolean = false

    }

  }

  filtroTarefa: string= null;
  filtroTarefaNome: string = null;

  adicionaFiltroTarefa():void{

    this.filtroTarefaNome = this.filtroTarefa 

  }

  removerFiltroTarefa(): void {

    this.filtroTarefaNome = null;
    
  }




  cadastrarTarefaBoolean: boolean = false;
  nomeCadastroTarefa: string = "Adicionar Tarefa";

  trocaBooleanCategoria():boolean{

    if(this.cadastrarCategoriaBoolean==false){

      console.log(this.cadastrarCategoriaBoolean)
      this.nomeCadastroCategoria = "Cancelar Categoria"
      this.nomeCadastroTarefa = "Adicionar Tarefa"
      this.cadastrarTarefaBoolean = false;
      this.removerCategoriaBoolean = false
      this.adicionarMostrarFiltroBoolean = false
      return this.cadastrarCategoriaBoolean = true


    }
    if(this.cadastrarCategoriaBoolean==true){

      console.log(this.cadastrarCategoriaBoolean)
      this.nomeCadastroCategoria = "Adicionar Categoria"
      return this.cadastrarCategoriaBoolean = false

    }

  }

  categoria: string = "";


  cadastrarCategoriaBoolean: boolean = false;
  nomeCadastroCategoria: string = "Adicionar Categoria";

  removerCategoriaBoolean: boolean = false;
  nomeRemoverCategoria: string = "Remover Categoria";

  adicionarFiltroBoolean: boolean = false;
  adicionarMostrarFiltroBoolean: boolean = false;

  filtroCategoria: string = null;

  trocaBooleanMostrarAdicionarFiltro(): boolean{

    if(this.adicionarMostrarFiltroBoolean==false){

      this.nomeCadastroTarefa = "Adicionar Tarefa"
      this.nomeCadastroCategoria = "Adicionar Categoria"

      this.cadastrarTarefaBoolean = false;
      this.cadastrarCategoriaBoolean = false;
      this.removerCategoriaBoolean = false;
      return this.adicionarMostrarFiltroBoolean = true


    }
    if(this.adicionarMostrarFiltroBoolean==true){

      return this.adicionarMostrarFiltroBoolean = false

    }

  }

  trocaBooleanAdicionarFiltro(): boolean{

    if(this.adicionarFiltroBoolean==false){

      return this.adicionarFiltroBoolean = true


    }
    if(this.adicionarFiltroBoolean==true){

      return this.adicionarFiltroBoolean = false

    }

  }



  trocaBooleanRemover():boolean{

    if(this.removerCategoriaBoolean==false){

      console.log(this.removerCategoriaBoolean)
      this.cadastrarTarefaBoolean = false;
      this.cadastrarCategoriaBoolean = false;
      this.adicionarMostrarFiltroBoolean = false
      return this.removerCategoriaBoolean = true


    }
    if(this.removerCategoriaBoolean==true){

      console.log(this.removerCategoriaBoolean)
      return this.removerCategoriaBoolean = false

    }

  }


deletarCategoriaPadrao: boolean = false;

fecharAlertaCategoriaPadrao(): void {
  this.deletarCategoriaPadrao = false;
}


  deletaCategoria(): void {
    const indice = this.categorias.indexOf(this.categoria);

    if(indice == 1 || indice == 2 || indice == 0){

      this.deletarCategoriaPadrao = true;
      

    }

    if (indice >= 3) {
      this.categorias.splice(indice, 1);
      this.verificacaoCategoriaExistente()
    }
    this.categoria = null;
    localStorage.setItem("listaDeCategorias", JSON.stringify(this.categorias));
  }

  adicionaFiltroCategoria(): void {
    this.filtroCategoria = this.categoria;
    console.log(this.filtroCategoria)
    this.categoria = null;
  }
  removerFiltroCategoria(): void {
    this.filtroCategoria = null;
    this.categoria = null;
  }
  
  
  

}
