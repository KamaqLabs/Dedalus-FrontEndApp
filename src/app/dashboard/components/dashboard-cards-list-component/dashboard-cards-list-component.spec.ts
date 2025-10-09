import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCardsListComponent } from './dashboard-cards-list-component';

describe('DashboardCardsListComponent', () => {
  let component: DashboardCardsListComponent;
  let fixture: ComponentFixture<DashboardCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCardsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
