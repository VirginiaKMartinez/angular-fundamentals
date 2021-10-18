import { Component, Input} from '@angular/core';
import { Caracter } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-caracters',
  templateUrl: './caracters.component.html',
  
})
export class CaractersComponent {
  @Input() caracters : Caracter[] = [];

}


