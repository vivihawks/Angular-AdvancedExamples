import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';


export const routes: Routes = [
    { path: 'component-a', component: FirstComponent },
    { path: 'component-b', component: SecondComponent },
    { path: 'component-c', component: ThirdComponent },
    { path: '', redirectTo: 'component-a', pathMatch: 'full' },
    { path: '**', redirectTo: 'component-a', pathMatch: 'full' }
  ];
  
  

  
  export const routing = RouterModule.forRoot(routes);