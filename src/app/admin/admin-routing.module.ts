import { ReferenceDataManagerComponent } from './reference-data-manager/reference-data-manager.component';
import { AdminHomeComponent } from './admin-home.component';
import { AdminComponent } from './admin.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AdminHomeComponent
      },
      {
        path: 'manage',
        component: ReferenceDataManagerComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
