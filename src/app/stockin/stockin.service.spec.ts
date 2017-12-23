import { TestBed, inject } from '@angular/core/testing';

import { StockinService } from './stockin.service';

describe('StockinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockinService]
    });
  });

  it('should be created', inject([StockinService], (service: StockinService) => {
    expect(service).toBeTruthy();
  }));
});
