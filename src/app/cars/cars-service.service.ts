import { Http } from '@angular/http';
import { Car } from './models/car';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CarsServiceService {
  private apiUrl = 'http://localhost:3000/api/cars';
  readonly URL_DB = 'https://api.mlab.com/api/1/databases/car-db/collections/cars';
  readonly apiKey = '?apiKey=GoiXXQ40MtfUzXiKab0HjE_4gSPC2W72';
  constructor(private http: Http) { }

  getCars(): Observable<Car[]> {
    return this.http.get(this.URL_DB + this.apiKey)
      .map((res) => res.json());
  }
  getCar(id: string): Observable<Car> {
    return this.http.get(this.URL_DB + '/' + id + this.apiKey)
      .map((res) => res.json());
  }
  addCar(data): Observable<Car> {
    return this.http.post(this.URL_DB + this.apiKey, data)
      .map((res) => res.json());
  }
  updateCar(id: string, data): Observable<Car> {
    return this.http.put(this.URL_DB + '/' + id + this.apiKey, data)
      .map((res) => res.json());
  }
  removeCar(id: string): Observable<Car> {
    return this.http.delete(this.URL_DB + '/' + id + this.apiKey)
      .map((res) => res.json());
  }
}
