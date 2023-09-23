import { Component } from '@angular/core';
import { IProductos } from '../iproductos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
//directivas *ngif

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  productos:IProductos[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas familiar",
      "year":"Febrero 3 2020",
      "Precio":120000,
      "Marca":"NISSAN",
      "Color":"Morado",
      "imagenUrl":"https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_b9986cfd00b54021aed6c81257155ad8.webp",
    },
    {
      "productoId":2,
      "Modelo":"A4",
      "Descripcion":"4 puertas familiar",
      "year":"Febrero 3 2021",
      "Precio":200000,
      "Marca":"AUDI",
      "Color":"Blanco",
      "imagenUrl":"https://cdn.buttercms.com/fYZTSy4ZSOeNVbfctPIR",
    },
    {
      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"2 puertas familiar",
      "year":"Marzo 5 2022",
      "Precio":150000,
      "Marca":"KIA",
      "Color":"Azul",
      "imagenUrl":"https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_e2dc375992b74ad784ae04c0c25be8b0.webp",
    },
  ]

}
