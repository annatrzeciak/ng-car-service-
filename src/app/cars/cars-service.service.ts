import { Http } from '@angular/http';
import { Car } from './models/car';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CarsServiceService {
  private apiUrl = 'http://localhost:3000/api/cars';
  constructor(private http: Http) { }

  getCars(): Observable<Car[]> {
    return this.http.get(this.apiUrl)
      .map((res) => res.json());
  }
  getCar(id: number): Observable<Car> {
    return this.http.get(this.apiUrl + `/${id}`)
      .map((res) => res.json());
  }
}
