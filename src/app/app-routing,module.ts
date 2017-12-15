import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { CarsListComponent } from './cars/cars-list/cars-list.component';

const APP_ROOTS: Route[] = [{ path: '', pathMatch: 'full', redirectTo: 'cars' },
    { path: 'cars', component: CarsListComponent }];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROOTS)],
    exports: [RouterModule]
})
export class AppRoutingModule { }