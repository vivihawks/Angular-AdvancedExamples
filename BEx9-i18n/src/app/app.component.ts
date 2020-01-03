import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
	currentUrl : string ;
	  minutes = 0;
	  gender = 'female';
	  fly = true;
	  logo = 'https://angular.io/assets/images/logos/angular/angular.png';

	user =   { firstName: "Vignesh Murali", lastName: "Natarajan"};
	welcome: string;
	usernameLabel: string;
	passwordLabel: string;

	  inc(i: number) {
		this.minutes = Math.min(5, Math.max(0, this.minutes + i));
	  }
	  male() { this.gender = 'male'; }
	  female() { this.gender = 'female'; }
	  other() { this.gender = 'other'; }
	constructor(public translate: TranslateService) {
		translate.addLangs(['en', 'ta'])
		translate.setDefaultLang('en');
		translate.use('ta');
		this.currentUrl = window.location.href;
	  }
  

	ngOnInit() {

	  // synchronous. Also interpolate the 'firstName' parameter with a value
	  this.welcome = this.translate.instant('welcomeMessage', { firstName: this.user.firstName });
	  // asynchronous - gets translations then completes.
	  this.translate.get(['login.username', 'login.password'])
		.subscribe(translations => {
		  this.usernameLabel = translations['login.username'];
		  this.passwordLabel = translations['login.password'];
		});
	}
}

