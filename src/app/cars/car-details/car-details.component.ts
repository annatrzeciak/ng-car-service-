import { Car } from './../models/car';
import { CarsServiceService } from './../cars-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {
  car: Car;

  constructor(private carsService: CarsServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadCar();
  }
  loadCar() {
    this.car = this.route.snapshot.data['car'];
  }
}
