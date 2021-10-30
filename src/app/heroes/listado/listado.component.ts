import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes:string[]=['uno','dos','tres','cuatro'];
  Remove:string='';
  removerHeroe(){
    this.Remove = this.heroes.shift() || '';
  }


}
