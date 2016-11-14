/**
 * Created by goran.pavlovski on 11/10/2016.
 */


import {Component, OnInit} from "@angular/core";
import {IUsers} from "../shared/interfaces";
import {DataService} from "../core/service/data.service";

@Component({
    selector: 'users',
    template: require('./users.component.html'),
    styles: [require('./users.component.scss')]
})

export class UsersComponent implements OnInit{

    users: IUsers[];

    constructor(private dataService: DataService){}

    ngOnInit(){

        this.dataService.getUsers()
            .subscribe((users: IUsers[]) => {
                this.users = users;
            })

    }
}