import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


/* From a freshly created project, issue these commands
$ ng generate module admin
$ ng generate component admin/login
$ ng generate component admin/dashboard

*/
const routes: Routes = [
{ path: 'admin', loadChildren: () => import(`./admin/admin.module`).then(m => m.AdminModule) }
/* 
Old Import 
~~~~~~~~~~
{ path: '/cart', loadChildren: './cart/cart.module#CartModule' }
*/

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
