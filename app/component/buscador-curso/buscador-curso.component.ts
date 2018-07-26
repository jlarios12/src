import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import {CursosService} from '../../services/cursos.service';

@Component({
  selector: 'app-buscador-curso',
  templateUrl: './buscador-curso.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class BuscadorCursoComponent implements OnInit {

  curso: any[] = [];

  constructor(private params: ActivatedRoute, private cursos: CursosService) {
    this.params.params.subscribe( params => {
      this.curso = this.cursos.buscarCurso(params['nombre']);
    });
  }

  ngOnInit() {
  }

}
