import { Injectable } from "@angular/core";
import { Caracter } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {

    // Ponemos como private para que en ningún sitio fuera de nuestro componente 
    // puedan modificar este array. Luego el ponerle guión bajo al nombre "_caracters" es un estandar
    // de buenas prácticas para señalar que es una propiedad privada.

    private _caracters: Caracter[] = [
        {
          name: 'Goku',
          power: 15000
        },
        {
          name: 'Vegeta',
          power: 7500
        }
      ];
    //   Como javascript trabaja por referencia y para evitar que al hacer nuestro get
    //   pudiéramos modificar sin querer la data de este array, metememos el this._caracters
    //   dentro de corchetes, estos indican que es un array y los tres puntos, que es el operador
    //   spread. El operador spread sirve para decir que separe cada uno de los elementos del array y cree uno nuevo.
    //   Esto lo que hace es "romper" la referencia con los Caracters de arriba en la línea 12.
    // Ahora como no están relacionados por referencia, no lo modificará.

      get caracters(): Caracter[] {
          return [...this._caracters];
      }
        constructor() {}//este Constructor no está haciendo nada ahora mismo.


    //   Con esta función y su push lo que vamos a hacer es almacenar el nuevo personale dentro de nuestro array
    //   _caracters, junto con Goku y Vegeta
        addCaracter( caracter: Caracter){
            this._caracters.push( caracter );

        }
        
    }

