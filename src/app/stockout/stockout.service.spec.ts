import { TestBed, inject } from '@angular/core/testing';

import { StockoutService } from './stockout.service';

describe('StockoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockoutService]
    });
  });

  it('should be created', inject([StockoutService], (service: StockoutService) => {
    expect(service).toBeTruthy();
  }));
});
