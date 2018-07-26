import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {CursosService} from './services/cursos.service'

import {CURSOS_ROUTING} from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { CursosComponent } from './component/cursos/cursos.component';
import { CursoinfoComponent } from './component/cursoinfo/cursoinfo.component';
import { BuscadorCursoComponent } from './component/buscador-curso/buscador-curso.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CursosComponent,
    CursoinfoComponent,
    BuscadorCursoComponent
  ],
  imports: [
    BrowserModule,
    CURSOS_ROUTING
  ],
  providers: [
    CursosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
