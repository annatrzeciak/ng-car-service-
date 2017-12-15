import { Car } from './models/car';
import { CarsServiceService } from './cars-service.service';
import {ActivatedRouteSnapshot, Resolve } from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class CarResolve implements Resolve<Car> {
    constructor(private carsService: CarsServiceService) {
    }
    resolve(route: ActivatedRouteSnapshot) {
        return this.carsService.getCar(route.params['id']);
    }
}