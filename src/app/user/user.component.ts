/**
 * Created by goran.pavlovski on 11/10/2016.
 */


import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: 'user',
    template: require('./user.component.html')
})

export class UserComponent{

    constructor(private router: Router){}

}