import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {​​​​​ FormsModule }​​​​​ from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ADMINComponent } from './admin/admin.component';
import { USUARIOComponent } from './usuario/usuario.component';
import { CONDUCTORComponent } from './conductor/conductor.component';
import {HttpClientModule} from '@angular/common/http';
import { DatospersonalesComponent } from './datospersonales/datospersonales.component';
import { DatosvehiculosComponent } from './datosvehiculos/datosvehiculos.component';
import { RegistrarviajesComponent } from './registrarviajes/registrarviajes.component';
import { SolicitarviajeComponent } from './solicitarviaje/solicitarviaje.component';

@NgModule({
  declarations: [
    AppComponent,
    ADMINComponent,
    USUARIOComponent,
    CONDUCTORComponent,
    DatospersonalesComponent,
    DatosvehiculosComponent,
    RegistrarviajesComponent,
    SolicitarviajeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
