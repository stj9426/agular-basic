import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre:string='Iroman'
    edad:number = 45
    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }
}