import { WineService } from './../services/wine-service';
import { AdminHomeComponent } from './admin-home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AdminHomeComponent, AdminHomeComponent],
  providers:[WineService]
})
export class AdminModule { }
