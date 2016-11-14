import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuppiesComponent } from '../../puppies';
import { OttersComponent } from '../../otters';
import { KittensComponent } from '../../kittens';
import {UsersComponent} from "../../users/users.component";
import {UserDetailsComponent} from "../../user/user-details.component";
import {UserEditComponent} from "../../user/user-edit.component";

const appHeaderRoutes: Routes = [
	{
		path: 'puppies',
		component: PuppiesComponent
	},
	{
		path: 'otters',
		component: OttersComponent
	},
	{
		path: 'kittens',
		component: KittensComponent
	},
	{
		path: 'users',
		component: UsersComponent
	},
    {
        path: 'user-details/:id',
        component: UserDetailsComponent
    },
    {
        path: 'user-edit/:id',
        component: UserEditComponent
    },
	{
		path: '',
		redirectTo: '/puppies',
		pathMatch: 'full'
	}
];

export const appHeaderRouting: ModuleWithProviders = RouterModule.forChild(appHeaderRoutes);