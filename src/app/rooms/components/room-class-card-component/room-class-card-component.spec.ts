import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomClassCardComponent } from './room-class-card-component';

describe('RoomClassCardComponent', () => {
  let component: RoomClassCardComponent;
  let fixture: ComponentFixture<RoomClassCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomClassCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomClassCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
