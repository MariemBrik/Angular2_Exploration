import {Component} from 'angular2/core';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';


@Component ({
	selector: 'my-app',
	template: `
  		<h1>{{title}}</h1>
  		<nav>
    		<a [routerLink]="['Dashboard']">Dashboard</a>
    		<a [routerLink]="['Heroes']">Heroes</a>
  		</nav>
  		<a [routerLink]="['Heroes']">Heroes</a>
  		<router-outlet></router-outlet>
  		<div *ngIf="selectedHero">
  			<h2>
    			{{selectedHero.name | uppercase}} is my hero
  			</h2>
  		<button (click)="gotoDetail()">View Details</button>
		</div>

	`,
	styleUrls: ['app/app.component.css'],

	directives: [ROUTER_DIRECTIVES],
    providers: [
  		ROUTER_PROVIDERS,
  		HeroService
]

})

@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
  path: '/detail/:id',
  name: 'HeroDetail',
  component: HeroDetailComponent
  },
   {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  }

])

export class AppComponent {
	title = 'Tour of Heroes';
}