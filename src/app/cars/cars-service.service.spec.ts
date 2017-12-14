import { TestBed, inject } from '@angular/core/testing';

import { CarsServiceService } from './cars-service.service';

describe('CarsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarsServiceService]
    });
  });

  it('should be created', inject([CarsServiceService], (service: CarsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
