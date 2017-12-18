import { CarsServiceService } from './../cars-service.service';
import { Car } from './../models/car';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TotalCostComponent } from '../total-cost/total-cost.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



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
  carForm: FormGroup;

  constructor(private carsService: CarsServiceService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.loadCars();
    this.carForm = this.buildCarForm();

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
  goToCarDetails(car: Car) {
    this.router.navigate(['/cars', car._id.$oid]);
  }
  buildCarForm() {
    return this.formBuilder.group({

      model: ['', Validators.required],
      type: '',
      plate: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(7)]],
      deliveryDate: '',
      deadline: '',
      color: '',
      power: '',
      clientFirstName: '',
      clientSurname: '',
      year: '',
      cost: '',
      isFullyDamaged: ''

    });
  }
  addCar() {
    this.carsService.addCar(this.carForm.value).subscribe(() => {
      this.loadCars();
      this.carForm.reset();
    });
  }
  removeCar(car, event) {
    event.stopPropagation();
    this.carsService.removeCar(car._id.$oid).subscribe(() => {
      this.loadCars();
    });

  }
}
