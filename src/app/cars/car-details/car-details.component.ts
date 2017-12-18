import { Car } from './../models/car';
import { CarsServiceService } from './../cars-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {
  car: Car;
  carForm: FormGroup;


  constructor(private carsService: CarsServiceService, private router: Router,
    private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadCar();
    this.carForm = this.buildCarForm();
  }
  loadCar() {
    this.car = this.route.snapshot.data['car'];
  }
  buildCarForm() {
    return this.formBuilder.group({

      model: [this.car.model, Validators.required],
      type: this.car.type,
      plate: [this.car.plate, [Validators.required, Validators.minLength(3), Validators.maxLength(7)]],
      deliveryDate: this.car.deliveryDate,
      deadline: this.car.deadline,
      color: this.car.color,
      power: this.car.power,
      clientFirstName: this.car.clientFirstName,
      clientSurname: this.car.clientSurname,
      year: this.car.year,
      cost: this.car.cost,
      isFullyDamaged: this.car.isFullyDamaged

    });
  }
  updateCar() {
    this.carsService.updateCar(this.car._id.$oid, this.carForm.value).subscribe(() => {
      this.router.navigate(['/cars']);
      this.carForm.reset();
    });
  }
}
