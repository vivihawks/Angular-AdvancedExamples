import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode(); 
}
//JIT
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

  //Prior to A5, below code implied AOT. With A5 and later use ng build/serve --prod or --aot to do this
  //AOT
  //1. npm install @angular/compiler-cli typescript@next @angular/platform-server @angular/compiler
  //2. ngc -p src
  //3. Below line of code
  //platformBrowser.bootstrapModuleFactory(AppModuleNgFactory)
  //.catch(err => console.log(err));
