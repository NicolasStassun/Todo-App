import { Route, Router, RouterModule } from "@angular/router";
import { CategoriaComponent } from "./categoria/categoria.component";
import { TarefasComponent } from "./tarefas/tarefas.component";
import { NgModule } from "@angular/core";


const routes: Route[] = [
    {
        path: 'categoria', 
        component: CategoriaComponent
    },
    {
        path: 'tarefas',
        component: TarefasComponent
    },
]

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}