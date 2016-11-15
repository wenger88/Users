/**
 * Created by goran.pavlovski on 11/10/2016.
 */

import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {DataService} from "../core/service/data.service";
import {IUsers} from "../shared/interfaces";
import {NgForm} from "@angular/forms";
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
                    this.router.navigate(['/user-details', this.user.id]);
                    console.log(this.userForm);
                }else {
                    this.errorMessage = 'Unable to save customer';
                }
            });
    }


    onCancel(event: Event){
        event.preventDefault();
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

    removeSkill(i: number){
        this.user.skills.splice(i, 1);
        this.userForm.form.markAsDirty();
    }

    keyDownFunction(event: Event){
        event.preventDefault();
    }

}