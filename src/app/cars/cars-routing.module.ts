import { CarResolve } from './car-resolve.service';
import { CarDetailsComponent } from './car-details/car-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';


const CARS_ROOTS: Route[] = [{ path: 'cars/:id', component: CarDetailsComponent, resolve: { car: CarResolve } }];

@NgModule({
    imports: [RouterModule.forChild(CARS_ROOTS)],
    exports: [RouterModule]
})
export class CarsRoutingModule { }