import { CellarService } from './../services/cellar-service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CellarRoutingModule } from './cellar-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CellarFormComponent } from './cellar-form/cellar-form.component';
import { CellarListComponent } from './cellar-list/cellar-list.component';


@NgModule({
  imports: [
    CommonModule,
    CellarRoutingModule,
    FormsModule,
    HttpModule
  ],
  declarations: [CellarFormComponent, CellarListComponent],
  providers: [CellarService]
})
export class CellarModule { }
