import { CellarListComponent } from './cellar-list/cellar-list.component';
import { CellarFormComponent } from './cellar-form/cellar-form.component';
import { CellarComponent } from './cellar.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const cellarRoutes: Routes = [
  {
    path: 'cellar',
    component: CellarComponent,
    children: [
      { path: 'new', component: CellarFormComponent },
      { path: 'browse', component: CellarListComponent}
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(cellarRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CellarRoutingModule { }
