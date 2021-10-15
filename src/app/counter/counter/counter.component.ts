import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
    <h2>{{ title }}</h2>
    <h3>My base is: {{ base }} </h3>
    <div>
        <button (click)="acumulate(base)"> +{{ base }} </button>
        <span> {{ number }} </span>
        <button (click)="acumulate(-base)"> -{{ base }} </button>
    </div>
    `
})
export class CounterComponent{
    title: string = 'Counter App';
    number: number = 10;
    base: number = 5;

    acumulate( value: number ){
     this.number += value;
        }
    }