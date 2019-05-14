import { TestBed } from '@angular/core/testing';

import { HideService } from './hide.service';

describe('HideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HideService = TestBed.get(HideService);
    expect(service).toBeTruthy();
  });
});
