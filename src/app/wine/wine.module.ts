

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WineService } from './../services/wine-service';
import { WineRoutingModule } from './wine-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WineHomeComponent } from './wine-home.component'; 
import { WineListComponent } from './wine-list/wine-list.component';
import { WineCardComponent } from './wine-card/wine-card.component';
import { WineFormComponent } from './wine-form/wine-form.component';
import { WineDetailComponent } from './wine-detail/wine-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WineRoutingModule
  ],
  declarations: [WineHomeComponent, WineListComponent, WineCardComponent, WineFormComponent, WineDetailComponent],
  providers: [WineService]
})
export class WineModule { }
