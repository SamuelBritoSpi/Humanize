import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contatos } from './components/contatos/contatos';
import { Informativos } from './components/informativos/informativos';



export const routes: Routes = [
    {path: '', component: Home},
    {path: 'home', component: Home},
    {path: 'about', component: About },
    {path: 'contatos', component: Contatos },
    {path: 'informativos', component: Informativos }
];



