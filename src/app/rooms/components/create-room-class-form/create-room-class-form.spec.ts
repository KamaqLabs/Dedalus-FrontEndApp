import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRoomClassForm } from './create-room-class-form';

describe('CreateRoomClassForm', () => {
  let component: CreateRoomClassForm;
  let fixture: ComponentFixture<CreateRoomClassForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRoomClassForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRoomClassForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
