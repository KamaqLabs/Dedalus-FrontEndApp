import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentReservation } from './component-reservation';

describe('ComponentReservation', () => {
  let component: ComponentReservation;
  let fixture: ComponentFixture<ComponentReservation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentReservation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentReservation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
