import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/domain/persona';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {

  listadoPersonas: Persona[] = [] 
  personaSelecionada: Persona| null = null;
  
  constructor(personaServices:PersonaService,private router: Router ) {
    this.listadoPersonas = personaServices.getlist()
  }

  editar(persona: Persona){


    let params: NavigationExtras = {
      queryParams: {
        persona: persona,
        nombre: 'Persona'
      }
    }
    this.router.navigate(["paginas/Formulario"], params)

  
  }


  eliminar(persona: Persona) {
    for(let i = 0 ; i < this.listadoPersonas.length ; i++){
      if(this.listadoPersonas[i] === persona){
        console.log("son iguales");
        this.listadoPersonas.splice(i,1);
      }
    }
  }



}
