import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { LandingComponent } from './landing/landing.component';
import { ExamenComponent } from './examen/examen.component';
import { ResultadosComponent } from './resultados/resultados.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LandingComponent,
    ExamenComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
