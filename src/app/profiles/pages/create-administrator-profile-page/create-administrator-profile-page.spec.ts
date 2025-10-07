import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdministratorProfilePage } from './create-administrator-profile-page';

describe('CreateAdministratorProfilePage', () => {
  let component: CreateAdministratorProfilePage;
  let fixture: ComponentFixture<CreateAdministratorProfilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAdministratorProfilePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAdministratorProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
