import {ModuleWithProviders} from "@angular/core";
/**
 * Created by goran.pavlovski on 11/10/2016.
 */

export interface IUsers{
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    age: number,
    bio: string,
    jobTitle: string,
    avatar: string,
    address: string,
    city: string,
    state: string,
    skills: ISkills[]
}

export interface ISkills{
    title: string,
    rating: number
}

export interface IRouting {
    routes: ModuleWithProviders,
    components: any[]
}