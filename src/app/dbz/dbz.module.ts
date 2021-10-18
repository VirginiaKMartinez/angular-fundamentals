import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { CaractersComponent } from './caracters/caracters.component';
import { AddComponent } from './add/add.component';



@NgModule({
  declarations: [
    MainPageComponent,
    CaractersComponent,
    AddComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
