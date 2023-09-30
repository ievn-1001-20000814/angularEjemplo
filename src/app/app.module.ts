import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';

import { FormsModule } from '@angular/forms';
import { ProductoFilterPipe } from './product/producto-filter.pipe';
import {OperasBasComponent} from './formularios/operas-bas/operas-bas.component';
import { CalculosComponent } from './formularios/calculos/calculos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SumaComponent } from './formularios/suma/suma.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductoFilterPipe,
    OperasBasComponent,
    CalculosComponent,
    SumaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
