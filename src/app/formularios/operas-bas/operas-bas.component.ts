import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
  num1:string='';
  num2:string='';
  resultado:number=0;
  opcion:number=0;
  operacion():void{

    if(this.opcion==1)
    this.resultado = parseFloat(this.num1)+parseFloat(this.num2);
    if(this.opcion==2)
    this.resultado = parseFloat(this.num1)-parseFloat(this.num2);
    if(this.opcion==3)
    this.resultado = parseFloat(this.num1)*parseFloat(this.num2);
    if(this.opcion==4)
    this.resultado = parseFloat(this.num1)/parseFloat(this.num2);
  

  }

}
