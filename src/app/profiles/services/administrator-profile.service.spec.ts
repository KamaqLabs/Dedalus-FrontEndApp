import { TestBed } from '@angular/core/testing';

import { AdministratorProfileService } from './administrator-profile.service';

describe('AdministratorProfileService', () => {
  let service: AdministratorProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdministratorProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
