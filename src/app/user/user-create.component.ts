/**
 * Created by goran.pavlovski on 11/14/2016.
 */

import {Component, OnInit} from "@angular/core";
import {NgForm} from "@angular/forms";
import {IUsers} from "../shared/interfaces";
import {ViewChild} from "@angular/core";
import {DataService} from "../core/service/data.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import 'rxjs/Rx'

@Component({
    selector: 'user-create',
    template: require('./user-create.component.html'),
    styles:[require('./user-create.component.scss')]
})

export class UserCreateComponent implements OnInit{

    user: IUsers = {

        "skills": [
        ]
    };

    postMyCarToServer:string;

    errorMessage: string;
    @ViewChild('userForm') userForm: NgForm;

    constructor(private route: ActivatedRoute,
                private dataService: DataService,
                private router: Router,){}

    ngOnInit(){

    }

    onSubmit(){
        let userOperation:Observable<IUsers[]>;
        //this.dataService.addUser(this.user);
        this.dataService.addUser(this.user)
            .subscribe(
                data => this.postMyCarToServer = JSON.stringify(data),
                error => console.log("Error HTTP Post Service"), // in case of failure show this message
                () => console.log("Job Done Post !")
            );
        console.log(this.user);
        this.router.navigate(['/users']);
    }

    addSkill(title: HTMLInputElement, rating: HTMLInputElement){
        let skill: any = {
            'title': title.value,
            'rating': rating.value
        }

        if (skill.title != "" && skill.rating != ""){
            console.log(title);
            this.user.skills.push(skill);
            title.value = null;
            rating.value = null;
        }else{
            console.log('Empty Fields!');
        }

        console.log(skill);

    }

}

