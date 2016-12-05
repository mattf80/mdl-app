import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { CellarModule } from './cellar/cellar.module';
import { WineModule } from './wine/wine.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data-service';

import { AppComponent } from './app.component';
import { WineComponent } from './wine/wine.component';
import { CellarComponent } from './cellar/cellar.component';
import { AdminComponent } from './admin/admin.component';




@NgModule({
  declarations: [
    AppComponent,
    WineComponent,
    CellarComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    WineModule,
    CellarModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
