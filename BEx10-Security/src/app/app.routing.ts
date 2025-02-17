import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from 'my-util-lib';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: 'home',pathMatch:'full' },
    { path: '', redirectTo: 'home',pathMatch:'full' }
];

export const appRoutingModule = RouterModule.forRoot(routes, { enableTracing: true });