import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularEjemplo';

  apellido='Reyes';

  duplicarNumero(valor:number):number{
  return valor *2;
}
  pelicula={
    titulo:'Spiderman',
    fechaLanzamiento:new Date(),
    precio:20,
  }
}
