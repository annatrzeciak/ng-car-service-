import { CarsServiceService } from './cars/cars-service.service';
import { TotalCostComponent } from './cars/total-cost/total-cost.component';
import { CarsModule } from './cars/cars.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CarsModule,
    HttpModule
  ],
  providers: [CarsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
