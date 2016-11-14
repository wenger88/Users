/**
 * Created by goran.pavlovski on 11/10/2016.
 */

import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {DataService} from "../core/service/data.service";
import {IUsers} from "../shared/interfaces";
import {NgForm, FormGroup} from "@angular/forms";
import {ViewChild} from "@angular/core";

@Component({
    selector: 'user-edit',
    template: require('./user-edit.component.html'),
    styles: [require('./user-edit.component.scss')]
})

export class UserEditComponent implements OnInit{

    user: IUsers;
    errorMessage: string;
    @ViewChild('userForm') userForm: NgForm;

    constructor(private route: ActivatedRoute,
                private dataService: DataService,
                private router: Router,
    ){}

    ngOnInit(){

        this.route.params.subscribe((params: Params) => {
            this.dataService.getUser(params['id'])
                .subscribe((user: IUsers) => this.user = user);
        });

    }



    onSubmit(){
        this.dataService.updateUser(this.user)
            .subscribe((status: boolean) => {
                if (status){
                    this.userForm.form.markAsPristine();
                    this.router.navigate(['/users']);
                }else {
                    this.errorMessage = 'Unable to save customer';
                }
            });
    }


    onCancel(event: Event){
        event.preventDefault();
        this.router.navigate(['/users']);
    }

}