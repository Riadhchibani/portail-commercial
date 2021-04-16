import { TestBed } from '@angular/core/testing';

import { AccesGuard } from './acces.guard';

describe('AccesGuard', () => {
  let guard: AccesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
