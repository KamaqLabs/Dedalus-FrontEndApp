import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHotelForm } from './create-hotel-form';

describe('CreateHotelForm', () => {
  let component: CreateHotelForm;
  let fixture: ComponentFixture<CreateHotelForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateHotelForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateHotelForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
