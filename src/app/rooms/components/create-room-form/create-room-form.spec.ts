import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRoomForm } from './create-room-form';

describe('CreateRoomForm', () => {
  let component: CreateRoomForm;
  let fixture: ComponentFixture<CreateRoomForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRoomForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRoomForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
