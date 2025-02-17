import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
export function HttpLoaderFactory(http: HttpClient) {
        return new TranslateHttpLoader(http);
}
@NgModule({
        imports: [
                BrowserModule,
                TranslateModule.forRoot({
                        loader: {
                                provide: TranslateLoader,
                                useFactory: HttpLoaderFactory,
                                deps: [HttpClient]
                        }
                })
        ],
        declarations: [AppComponent],
        bootstrap: [AppComponent],
        providers: [provideHttpClient()]
})
export class AppModule { }