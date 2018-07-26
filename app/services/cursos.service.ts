import { Injectable } from '@angular/core';

export interface CursosRules {
  id: number;
  nombre: string;
  imagen: string;
  tipo: string;
  valor: string;
  significado: string;
  simbolo: string;
}

@Injectable()
export class CursosService {

  cursos: CursosRules [] = [

    {
      'id': 0,
      'nombre': " B'atz' ",
      'imagen': 'amanecercuchumatanes.jpg',
      'tipo': 'dia para pedir por la humanidad',
      // tslint:disable-next-line:max-line-length
      'valor': " B'atz' es el hilo del tiempo.El hilo del destino. En ese hilo es donde estàn escritos todos los acontecimientos del tiempo. Tambièn es el hilo o cordòn umbilical, el que traemos del vientre de nuestra madre al nacer. B'atz' tambièn es el hilo con que està tejida nuestra ropa,llevan allì toda una historia.",
      // tslint:disable-next-line:max-line-length
      'significado': 'Es un buen dìa para pedir por toda la humanidad, para pedir cosechas, siembras, inicio de un trabajo,de un proyecto, de una vida.Dìa para emprender cualquier actividad con exito.Buen dia para poner en orden las cosas.',
      'simbolo': 'Batz.jpg'
    },


    {
      'id': 1,
      'nombre': 'Ee',
      'imagen': 'fire-2188497_1920.jpg',
      'tipo': 'dia del fuego y de harmonia en el hogar',
      // tslint:disable-next-line:max-line-length
      'valor': 'El Ee nos guìa por el buen camino para cumplir nuestra misiòn, el para que hemos nacido...como el de ser un buen maestro y un buen lider. este dia te obliga a que debes ser educado con tus semejantes y no ser envidioso. debes saber amar y respetar a tus ancianos, a tus maestros, a tus autoridades. Debes ser el mejor retoño entre la familia.  ',
      // tslint:disable-next-line:max-line-length
      'significado': 'En este dia pueden hacerse peticiones para los buenos alimentos,pedir protecciòn para las siembras,pedir bienestar fisico y mental,como tambièn para agradecer las ocupaciones existentes y la palabra de la autoridad.',
      'simbolo': ' jjj'
    },

    {
      'id': 2,
      'nombre': 'Aj',
      'imagen': 'acatenango.jpg',
      'tipo': 'Aj es la caña, el cañaveral.',
      'valor': 'Simboliza todo lo relacionado con el hogar y la familia. El triunfo de la vida sobre la muerte. Aj simboliza el triunfo sobre toda clase de maldad. Es el dia de la renovaciòn,purificaciòn, del resurgimiento, de la firmeza. Tambièn representa el retorno al hogar, el lugar de oriegen. Personifica la integridad, honestidad y rectitud.',
      'significado': 'Aj es el dìa protector de la vida, dìa de dar gracias por el destino de cada uno y pedir para que no se destruya la humanidad.',
      'simbolo': 'jjj'
    },

    {
      'id': 3,
      'nombre': " I'x ",
      'imagen': 'lagunamagdalena2.jpg',
      'tipo': 'la madre tierra',
      'valor': "I'x es el día de la Madre Tierra.I'x es la Mujer. Simboliza nuestra madre, nuestra mujer, la madre demis hijos. Nuestra Madre Tierra es como una bella mujer, hermosa, en ella nacen los rìos, los lagos, las montañas. De ella brotan nuestros alimentos. La Tierra es nuestra Madre y merece respeto, amor y veneraciòn",
      'significado': 'En este dia se pide perdòn por la explotaciòn que hacemos a la Madre Naturaleza, como tambièn para pedir el retoño de las plantas. Dìa propicio para agradecer el trabajo de las mujeres,tambièn para pedir por la vida de los animales domesticos y salvajes. Dìa indicado para pedir buena cosecha y sabidurìa.',
      'simbolo': 'jjj'
    },
    {
      'id':4,
      'nombre':"Tz'ikin ",
      'imagen': 'camping-2581242_1920.jpg',
      'tipo': 'quiiere decir pajaro',
      // tslint:disable-next-line:max-line-length
      'valor': " En el dìa Tz'ikin encontraras riqueza tanto material como esperiual, es el regalo màs precioso del Corazòn del Cielo sobre la faz de la Tierra. El Tz'ikin es el dia ordenador de tu feliciad. Busca el hilo de tu destino, no desees lo que  no es tuyo; busca lo propio, aceptalo y alegrate.",
      'significado': 'Dìa propicio para el amor,para pedir la abundancia, tanto en lo particular como en lo comunitariio.Las celebraciones y ofrendas que se hacen son para mejorar riquezas, para pedir sencilles y amabilidad',
      'simbolo': '',
    },
    {
      'id': 5,
      'nombre': 'AJMAQ',
      'imagen': 'sunset-1931663_1920.jpg',
      'tipo': 'quiiere decir pajaro',
      // tslint:disable-next-line:max-line-length
      'valor': 'El Ajmaq es un dìa reconciliador. Es un dìa grande porque en nuestro mundo, en nuestra manera de vivir, cometemos muchos errores. Este dìa es especial para orientarnos, de que debemos hacer el bien y de evitar el mal; nos enseña a no buscar problemas con nuestros hermanos. Este dìa nos ordena a hacer el bien, a ser un ejemplo para los demas, a no manchar nuestro destino.Debemos demostrar respeto a todo ser humano por igual',
      'significado': 'En este dìa se pide por el el descanso de los fallecidos y su intermediaciòn para que las ofensas y pecados que cometemos no se repitan. Es el dìa màs propicio para perdonar y ser perdonados.',
      'simbolo': '',
    }

  ];

  obtenerCursos() {
    return this.cursos;
  }

  obtenerCurso(id: number) {
let curArr = [];

for ( let curso of this.cursos){
if ( curso.id == id) {
  curArr.push(curso);
  }
 }
 return curArr;
}

buscarCurso(termino: string) {
  let curArr = [];
 termino = termino.toLowerCase();
 for ( let curso of this.cursos){
   let nombre = curso.nombre.toLowerCase();
   if ( nombre.indexOf(termino) >= 0 ) {
    curArr.push( curso );
   }
 }
 return curArr;

}

  constructor() { }

}
