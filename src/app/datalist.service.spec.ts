import { TestBed, inject } from '@angular/core/testing';

import { DatalistService } from './datalist.service';

describe('DatalistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatalistService]
    });
  });

  it('should be created', inject([DatalistService], (service: DatalistService) => {
    expect(service).toBeTruthy();
  }));
});
