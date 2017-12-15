import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoreModule } from './core-module/core.module';
import { CarsServiceService } from './cars/cars-service.service';
import { TotalCostComponent } from './cars/total-cost/total-cost.component';
import { CarsModule } from './cars/cars.module';
import { AppRoutingModule } from './app-routing,module';
import { CarsRoutingModule } from './cars/cars-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CarsModule,
    HttpModule,
    CoreModule,
    AppRoutingModule,
    CarsRoutingModule
  ],
  providers: [CarsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
