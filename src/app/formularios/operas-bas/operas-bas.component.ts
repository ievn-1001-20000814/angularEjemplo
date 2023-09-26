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
  ope:number=0;
  suma:boolean=false;
  resta:boolean=false;
  multiplicacion:boolean=false;
  division:boolean=false;
  operacion():void{
    
    if(this.suma==true)
    this.resultado = parseFloat(this.num1)+parseFloat(this.num2);
    if(this.resta==true)
    this.resultado = parseFloat(this.num1)-parseFloat(this.num2);
    if(this.multiplicacion==true)
    this.resultado = parseFloat(this.num1)*parseFloat(this.num2);
    if(this.division==true)
    this.resultado = parseFloat(this.num1)/parseFloat(this.num2);
  

  }

}
