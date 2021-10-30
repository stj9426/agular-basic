import { CommonModule } from "@angular/common";

import { NgModule } from "@angular/core";
import { ContadorComponents } from './contador/contador.component';


@NgModule({
    declarations:[
        ContadorComponents
    ],
    exports:[
        ContadorComponents
    ],
    imports:[
        CommonModule

    ]
})
export class ContadorModule{}