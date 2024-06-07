import { TestBed } from '@angular/core/testing';

import { MapsControllerService } from './maps-controller.service';

describe('MapsControllerService', () => {
  let service: MapsControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapsControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
