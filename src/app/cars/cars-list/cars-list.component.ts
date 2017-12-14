import { CarsServiceService } from './../cars-service.service';
import { Car } from './../models/car';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TotalCostComponent } from '../total-cost/total-cost.component';


@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {
  @ViewChild('totalCostRef') totalCostRef: TotalCostComponent;
  totalCost: number;
  grossCost: number;
  cars: Car[];

  constructor(private carsService: CarsServiceService) { }

  ngOnInit() {
    this.loadCars();
    
  }
  countTotalCost(): void {
    this.totalCost = this.cars
      .map((car) => car.cost)
      .reduce((prev, next) => prev + next);
  }
  showGross() {
    this.totalCostRef.showGross();
  }
  onShownGross(grossCost: number) {
    this.grossCost = grossCost;
  }
  loadCars(): void {
    this.carsService.getCars().subscribe((cars) => {
      this.cars = cars;
      this.countTotalCost();
    });
    
  }
}
