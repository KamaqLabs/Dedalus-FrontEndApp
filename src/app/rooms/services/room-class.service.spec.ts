import { TestBed } from '@angular/core/testing';

import { RoomClassService } from './room-class.service';

describe('RoomClassService', () => {
  let service: RoomClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
