import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomClassCardListComponent } from './room-class-card-list-component';

describe('RoomClassCardListComponent', () => {
  let component: RoomClassCardListComponent;
  let fixture: ComponentFixture<RoomClassCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomClassCardListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomClassCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
