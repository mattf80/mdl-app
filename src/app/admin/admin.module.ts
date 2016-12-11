import { ListFilterPipe } from './../pipes/list-filter.pipe';
import { AdminService } from './../services/admin-service';
import { WineService } from './../services/wine-service';
import { AdminHomeComponent } from './admin-home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReferenceDataManagerComponent } from './reference-data-manager/reference-data-manager.component';
import { DataListComponent } from './reference-data-manager/data-list.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AdminHomeComponent, AdminHomeComponent, ReferenceDataManagerComponent, ListFilterPipe, DataListComponent],
  providers:[WineService, AdminService]
})
export class AdminModule { }
