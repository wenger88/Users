/**
 * Created by goran.pavlovski on 11/11/2016.
 */

import {Component} from "@angular/core";
import {Input} from "@angular/core";
import {ISkills} from "../shared/interfaces";
import {FormGroup} from "@angular/forms";

@Component({
    selector: 'user-skill',
    template: require('./skills.component.html'),
    styles: [require('./skills.component.scss')]
})

export class SkillsComponent{

    @Input() skill: ISkills;
    @Input('group')
    public skillForm: FormGroup;

    constructor(){}




}