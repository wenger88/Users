/**
 * Created by goran.pavlovski on 11/10/2016.
 */

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DataService} from "./service/data.service";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    exports: [
        CommonModule
    ],
    providers: [
        DataService
    ]
})

export class CoreModule{}