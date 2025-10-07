import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHotelPage } from './create-hotel-page';

describe('CreateHotelPage', () => {
  let component: CreateHotelPage;
  let fixture: ComponentFixture<CreateHotelPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateHotelPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateHotelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
