import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';


@NgModule({
  declarations: [
    AppComponent,
    SecondComponentComponent,
    ThirdComponent,
    FourthComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [ThirdComponent, FourthComponent],
  bootstrap: [AppComponent, SecondComponentComponent]
})
export class AppModule {
  constructor(private injector:Injector){}

  //Comment / Uncomment the method below and the attribute above to see different behavior
  ngdDoBootstrap(app){
 //****** 3. Manually bootstrapping a component   ***********
  // create DOM element for the component being bootstrapped
  // and add it to the DOM
  const componentElement = document.createElement("app-third");
  document.body.appendChild(componentElement);
  // bootstrap the application with the selected component
  app.bootstrap(ThirdComponent);

  //****** 4. Bootstrapping a component as an HTML Element */
  const AppElement = createCustomElement(FourthComponent, { injector: this.injector });
  customElements.define('html-component', AppElement);

  }
 }
