import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCardInformationComponent } from './dashboard-card-information-component';

describe('DashboardCardInformationComponent', () => {
  let component: DashboardCardInformationComponent;
  let fixture: ComponentFixture<DashboardCardInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCardInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardCardInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
