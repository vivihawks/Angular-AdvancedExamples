import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from '@app/_services/cookieservice.service';

import { AuthenticationService } from '@app/_services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService,private cookieService : CookieService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.authenticationService.currentUserValue;
		let tkn = this.cookieService.get("XSRF-TOKEN");
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`,
                    //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTEASDFAjM5MDIyfQ.Veo7xzg66CKpZtm8gg4fTsFy32748_VXIa_LBIvsuP0
					X_XSRF_TOKEN:`${tkn}`
                }
            });
        }

		console.log("**********Submitting these headers below****************");
		console.log(request.headers)
        return next.handle(request);
    }
}