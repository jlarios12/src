import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor(private rutas: Router) { }

  ngOnInit() {
  }

  buscarCurso(termino: string) {
    this.rutas.navigate(['buscar', termino]);
  }

}
