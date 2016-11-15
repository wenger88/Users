/**
 * Created by goran.pavlovski on 11/10/2016.
 */

import {Component, OnInit} from "@angular/core";
import {DataService} from "../core/service/data.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {IUsers} from "../shared/interfaces";
import {Observable} from "rxjs";
import 'rxjs/Rx'

@Component({
    selector: 'user-details',
    template: require('./user-details.component.html'),
    styles: [require('./user-details.component.scss')]
})

export class UserDetailsComponent implements OnInit{

    user: IUsers;

    constructor(private dataService: DataService,private router: Router ,private route: ActivatedRoute){}

    ngOnInit(){

        this.route.params.subscribe((params: Params) => {
            this.dataService.getUser(params['id'])
                .subscribe((user: IUsers) => this.user = user);
        });

    }


    onDelete(){
        this.dataService.deleteUser(this.user.id).subscribe((res) =>{
            this.router.navigate(['/users']);
        });
    }





}

