import { TestBed } from '@angular/core/testing';

import { DragonDetailsResolver } from './dragon-details.resolver';

describe('DragonDetailsResolver', () => {
  let resolver: DragonDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DragonDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
