import { TestBed } from '@angular/core/testing';

import { Prodcutservice } from './prodcutservice';

describe('Prodcutservice', () => {
  let service: Prodcutservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Prodcutservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
