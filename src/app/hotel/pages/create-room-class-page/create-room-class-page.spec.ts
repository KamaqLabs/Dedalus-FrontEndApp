import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRoomClassPage } from './create-room-class-page';

describe('CreateRoomClassPage', () => {
  let component: CreateRoomClassPage;
  let fixture: ComponentFixture<CreateRoomClassPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRoomClassPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRoomClassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
