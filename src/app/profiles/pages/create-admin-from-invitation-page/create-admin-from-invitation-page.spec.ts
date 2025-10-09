import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdminFromInvitationPage } from './create-admin-from-invitation-page';

describe('CreateAdminFromInvitationPage', () => {
  let component: CreateAdminFromInvitationPage;
  let fixture: ComponentFixture<CreateAdminFromInvitationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAdminFromInvitationPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAdminFromInvitationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
