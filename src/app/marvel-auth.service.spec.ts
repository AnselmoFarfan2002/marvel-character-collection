import { TestBed } from '@angular/core/testing';

import { MarvelAuthService } from './marvel-auth.service';

describe('MarvelAuthServiceService', () => {
  let service: MarvelAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
