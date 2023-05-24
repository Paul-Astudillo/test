import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './templete/titulo/titulo.component';
import { MenuComponent } from './templete/menu/menu.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ListaComponent } from './pages/lista/lista.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PersonaComponent } from './pages/persona/persona.component';

import { DialogoComponent } from './pages/dialogo/dialogo.component';


import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import { PieComponent } from './templete/pie/pie.component';


@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    MenuComponent,
    FormularioComponent,
    ListaComponent,
    InicioComponent,
    PersonaComponent,
    DialogoComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgIf,
    MatButtonModule,
    MatIconModule,

    MatCardModule, 
    MatRadioModule, 
    FormsModule, 
    MatCheckboxModule,
     MatSlideToggleModule
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
