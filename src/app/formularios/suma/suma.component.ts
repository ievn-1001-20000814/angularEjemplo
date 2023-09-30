import { Component } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent {

  num1:string='';
  num2:string='';
  resultado:number=0;
  sumar():void{

    this.resultado = parseFloat(this.num1)+parseFloat(this.num2);
  }

}
