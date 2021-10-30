import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>

        <button (click)="acumular(base);"> + 1 </button>

        <span>{{numero}}</span>

        <button (click)="numero=numero-1;"> + 1 </button>
    `
})

export class ContadorComponents{
    titulo = 'bases';
    numero:number=10;
    base:number=5;
    acumular(valor:number){
      this.numero +=valor;
    }

}