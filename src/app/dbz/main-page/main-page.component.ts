import { Component } from '@angular/core';

interface Caracter {
  name: string,
  power: number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {
new: Caracter = {
  name:'Truncks',
  power: 14000
}

changeName(){
  
}
  add(){
    console.log(this.new);
    
  }

}
