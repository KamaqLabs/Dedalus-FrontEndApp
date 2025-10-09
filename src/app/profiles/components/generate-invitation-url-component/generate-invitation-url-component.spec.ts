import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateInvitationUrlComponent } from './generate-invitation-url-component';

describe('GenerateInvitationUrlComponent', () => {
  let component: GenerateInvitationUrlComponent;
  let fixture: ComponentFixture<GenerateInvitationUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateInvitationUrlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateInvitationUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
