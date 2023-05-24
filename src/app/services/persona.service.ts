import { Injectable } from '@angular/core';
import { Persona } from 'src/domain/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }


  Persona :Persona[]=[]

  

  save(persona:Persona){

    this.Persona .push(persona)
    
  }
  getlist(){
return this.Persona

  }
}
