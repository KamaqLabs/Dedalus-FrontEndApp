import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProfileFromInvitation } from './create-profile-from-invitation';

describe('CreateProfileFromInvitation', () => {
  let component: CreateProfileFromInvitation;
  let fixture: ComponentFixture<CreateProfileFromInvitation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateProfileFromInvitation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProfileFromInvitation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
