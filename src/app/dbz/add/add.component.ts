import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Caracter } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  
})
export class AddComponent  {


 @Input() new: Caracter = {
    name:'',
    power: 0
  }

  @Output() onNewCaracter: EventEmitter<Caracter> = new EventEmitter();

  @Input() add() {

    if ( this.new.name.trim().length === 0) {
      return;
    }

    console.log(this.new);
    this.onNewCaracter.emit( this.new )
    this.new = {
      name: '',
      power: 0
    }
  }
}
