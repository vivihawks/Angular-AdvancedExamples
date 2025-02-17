import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService, CookieService, User } from 'my-util-lib';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
		private cookieService : CookieService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
		this.cookieService.set("XSRF-TOKEN", "TestCookieForXSRF");
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}