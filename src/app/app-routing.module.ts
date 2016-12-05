import { CellarComponent } from './cellar/cellar.component';
import { WineComponent } from './wine/wine.component';

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
 
  { path: 'cellar', component: CellarComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
