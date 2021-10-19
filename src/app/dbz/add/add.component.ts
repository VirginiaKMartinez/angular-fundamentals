import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Caracter } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  
})
export class AddComponent  {


 @Input() new: Caracter = {
    name:'',
    power: 0
  }

  constructor( private dbzService: DbzService ) {

  }


  // @Output() onNewCaracter: EventEmitter<Caracter> = new EventEmitter(); antes de crear el servicio, pasábamos la info con el emmiter

  @Input() add() {

    if ( this.new.name.trim().length === 0) {
      return;
    }
    this.dbzService.addCaracter( this.new );
    console.log(this.new);
    // this.onNewCaracter.emit( this.new ) y aquí emitíamos el nuevo caracter
    this.new = {
      name: '',
      power: 0
    }
  }
}
