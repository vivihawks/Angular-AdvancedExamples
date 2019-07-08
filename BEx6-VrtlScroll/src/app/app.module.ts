import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { PlatformModule } from '@angular/cdk/platform';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	 ScrollingModule,
    AppRoutingModule,
	PlatformModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
