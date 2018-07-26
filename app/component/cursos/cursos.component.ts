import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {CursosService, CursosRules} from '../../services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class CursosComponent implements OnInit {

  cursos: any[]= [];

  constructor(private _cursos: CursosService) { }

  ngOnInit() {
    this.cursos = this. _cursos.obtenerCursos();
  }

}
