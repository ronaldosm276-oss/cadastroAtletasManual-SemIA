import { Routes } from '@angular/router';


import { HomeComponent } from './components/home-component/home-component';
import { AtletaComponent } from './components/atleta-component/atleta-component';
import { Teste } from './teste/teste';
import { CadastroCorrida } from './components/cadastro-corrida/cadastro-corrida';

export const routes: Routes = [

    {
        path: '',
        redirectTo:"/home",
        pathMatch: 'full'
    }
,
    {
        path: 'home',
        component:HomeComponent

    }
,
    {
        path: 'cadastroatleta',
        component:AtletaComponent
    }
,
    {
        path: 'teste',
        component:Teste
    }
,
    {
        path: 'cadastroCorrida',
        component:CadastroCorrida
    }

];
// sobre routes, esse path é 'linkDoSite/pathQualquer
// E chama o componente com component:nomeComponent
// definir as rotas do componente, mas como funciona?
// como é a estrutura básica de uma rota?