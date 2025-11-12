import {Component, OnDestroy, OnInit} from '@angular/core';
import {IotSensor} from '../../models/iot-sensor.model';
import {Subscription} from 'rxjs';
import {DashboardService} from '../../services/dashboard';
import {MatToolbar} from '@angular/material/toolbar';
import {NgIf} from '@angular/common';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-component-dashboard-iot',
  imports: [
    MatToolbar,
    NgIf,
    MatGridTile,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatGridList,
    MatButton
  ],
  templateUrl: './component-dashboard-iot.html',
  styleUrl: './component-dashboard-iot.css'
})
export class ComponentDashboardIot implements OnInit, OnDestroy {

  sensors?: IotSensor;
  private subscription?: Subscription;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.subscription = this.dashboardService.pollSensors(3000).subscribe({
      next: (data) => this.sensors = data
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  toggleActuator(key: keyof IotSensor): void {
    if (!this.sensors) return;
    const newValue = this.sensors[key] ? 0 : 1;
    this.dashboardService.updateSensor({ [key]: newValue }).subscribe();
  }

  asIsOrder(a: any, b: any) {
    return 1;
  }
}
