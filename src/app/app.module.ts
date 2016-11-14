import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent }   from './app.component';
import { PuppiesComponent } from './puppies';
import { OttersComponent } from './otters';
import { KittensComponent } from './kittens';

import { SharedModule } from './shared';
import {UsersComponent} from "./users/users.component";
import {UserComponent} from "./user/user.component";
import {UserDetailsComponent} from "./user/user-details.component";
import {UserEditComponent} from "./user/user-edit.component";
import {SkillsComponent} from "./skills/skills.component";

import {DataService} from "./core/service/data.service";

@NgModule({
	imports: [
		FormsModule,
		HttpModule,
		BrowserModule,		
		SharedModule,
		routing
	],
	declarations: [
		AppComponent,
		PuppiesComponent,
		OttersComponent,
		KittensComponent,
		UsersComponent,
		UserComponent,
		UserDetailsComponent,
		UserEditComponent,
        SkillsComponent

	],
	providers: [
		appRoutingProviders,
        DataService
	], 
	exports: [],
	bootstrap: [AppComponent],
})

export class AppModule {}