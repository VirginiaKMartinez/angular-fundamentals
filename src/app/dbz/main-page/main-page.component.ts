import { Component } from '@angular/core';
import { Caracter } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {
   
  new: Caracter = {
    name: 'Pato',
    power: 1000
  }


  constructor( ){

  }
}
