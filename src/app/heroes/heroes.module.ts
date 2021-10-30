import  { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core";
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports:[
        CommonModule

    ]

})
export class HeroesModule{}