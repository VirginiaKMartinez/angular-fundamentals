import { Component } from '@angular/core';
import { Caracter } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {
  caracters: Caracter[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ];

  new: Caracter = {
    name: 'Pato',
    power: 1000
  }
  addNewCaracter( caracter:Caracter ) {
    this.caracters.push( caracter );
    
  }

  constructor( private dbzservice: DbzService){

  }
}
