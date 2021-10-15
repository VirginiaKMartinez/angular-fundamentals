import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  heroes: string[] = ['Spiderman','Thor','Green Lantern','Anita Blake'];
  deletedHeroe: string = '';
  
  deleteHeroe(){
    
    // this.heroes.pop();
    this.deletedHeroe = this.heroes.pop() || '';
    
  }
}
