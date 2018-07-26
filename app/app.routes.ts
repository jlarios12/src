import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './component/home/home.component';
import { CursosComponent } from './component/cursos/cursos.component';
import {CursoinfoComponent} from './component/cursoinfo/cursoinfo.component';
import {BuscadorCursoComponent} from './component/buscador-curso/buscador-curso.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'curso/:id', component: CursoinfoComponent },
    { path: 'buscar/:nombre', component: BuscadorCursoComponent },
    { path: '**', redirectTo: 'home' }

];

export const CURSOS_ROUTING = RouterModule.forRoot(routes);
