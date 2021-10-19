import { Component, Input} from '@angular/core';
import { Caracter } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-caracters',
  templateUrl: './caracters.component.html',
  
})
export class CaractersComponent {
  // @Input() caracters : Caracter[] = [];

  get caracters() {
    return this.dbzService.caracters;
  }
  constructor( private dbzService:DbzService ) {
   
  }

}


