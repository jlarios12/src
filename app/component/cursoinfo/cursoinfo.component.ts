import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {ActivatedRoute} from '@angular/router';

import {CursosService} from '../../services/cursos.service';

@Component({
  selector: 'app-cursoinfo',
  templateUrl: './cursoinfo.component.html',
  styles: [],
  
})
export class CursoinfoComponent implements OnInit {

  curso: any[] = [];

  constructor(private ParamsRouter: ActivatedRoute, private cursoServicio: CursosService) {
     this.ParamsRouter.params.subscribe(params => {
       this.curso = this.cursoServicio.obtenerCurso(params['id']);

       console.log(this.curso);
     })
   }

  ngOnInit() {
  }

}
