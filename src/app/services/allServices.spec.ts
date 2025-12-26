import { TestBed } from '@angular/core/testing';

import { allServices } from './ allServices';

describe('Courses', () => {
  let service: allServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(allServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
