import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDashboardIot } from './component-dashboard-iot';

describe('ComponentDashboardIot', () => {
  let component: ComponentDashboardIot;
  let fixture: ComponentFixture<ComponentDashboardIot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentDashboardIot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentDashboardIot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
