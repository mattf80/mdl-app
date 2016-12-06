import { WineDetailComponent } from './wine-detail/wine-detail.component';
import { WineCardComponent } from './wine-card/wine-card.component';
import { WineHomeComponent } from './wine-home.component';
import { WineListComponent } from './wine-list/wine-list.component';
import { WineFormComponent } from './wine-form/wine-form.component';
import { WineComponent } from './wine.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const wineRoutes: Routes = [
  {
    path: 'wine',
    component: WineComponent,
    children: [
      {
        path: '',
        component: WineHomeComponent
      },
      {
        path: 'new',
        component: WineFormComponent
      },
      {
        path: 'list',
        component: WineListComponent
      },
      {
        path: ':id',
        component: WineDetailComponent
      },
      {
        path: ':id/edit',
        component: WineFormComponent
      },
      {
        path: ':id/detail',
        component: WineDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(wineRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class WineRoutingModule { }
