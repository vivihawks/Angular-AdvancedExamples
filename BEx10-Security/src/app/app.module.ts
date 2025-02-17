import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, provideHttpClient, withXsrfConfiguration, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { BypassSecurityComponent } from './bypass-security.component';
import { InnerHtmlBindingComponent } from './inner-html-binding.component';

// used to create fake backend
import { FakeBackendInterceptor, fakeBackendProvider } from 'my-util-lib';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

import { JwtInterceptor, ErrorInterceptor } from 'my-util-lib';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { CookieService } from 'my-util-lib';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        appRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        BypassSecurityComponent,
        InnerHtmlBindingComponent
    ],
    providers: [
        CookieService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        
        // provideHttpClient(),
        provideHttpClient(
            withXsrfConfiguration({ cookieName: 'XSRF-TOKEN', headerName: 'X-XSRF-TOKEN' }),
            withInterceptorsFromDi()
        )
        // provider used to create fake backend
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }