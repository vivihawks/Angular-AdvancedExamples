import { Injectable, Inject } from '@angular/core';
import { configToken } from './demo.token';
import { Config } from './demo.config';
//Change the value of providedIn below to one of - root | any | platform 
//and see the difference in behavior of the config service in the  UI
@Injectable({
  //providedIn: 'platform' //will error because configToken needs to be provided at platform level too
  // providedIn: 'root'
   providedIn: 'any'
})
export class ConfigService {

  constructor(@Inject(configToken) private config: Config) {
    console.log('new instance is created');
  }

  getValue() {
    return this.config;
  }
}
