import {Component, OnDestroy, OnInit} from '@angular/core';
import {IotSensor} from '../../models/iot-sensor.model';
import {Subscription} from 'rxjs';
import {DashboardService} from '../../services/dashboard';
import {WebsocketService} from '../../../shared/services/web-socket.service';

@Component({
  selector: 'app-component-dashboard-iot',
  imports: [
  ],
  templateUrl: './component-dashboard-iot.html',
  styleUrl: './component-dashboard-iot.css'
})
export class ComponentDashboardIot implements OnInit, OnDestroy {

  private subscription!: Subscription;

  smokeEntries: any[] = [];
  tempEntries: any[] = [];
  motionEntries: any[] = [];
  sensors: IotSensor[] = [];
  constructor(
    private websocketService: WebsocketService,
    private dashboardService: DashboardService
    ) {}

   ngOnInit() {
    this.websocketService.listen("new_data").subscribe((data: any) => {
      const topic = data.topic;
      const payload = data.payload;

      console.log(topic, payload);

      if (topic === "esp32/data/smoke") {
        this.smokeEntries = Object.entries(payload).map(([key, value]) => ({key, value}));
      }

      else if (topic === "esp32/data/temperature") {
        this.tempEntries = Object.entries(payload).map(([key, value]) => ({key, value}));
      }

      else if (topic === "esp32/data/motion") {
        this.motionEntries = Object.entries(payload).map(([key, value]) => ({key, value}));
      }
    });
     this.dashboardService.getSensors().subscribe((sensors: IotSensor[]) => {this.sensors = sensors;});
  }

  getSensorIcon(name: string): string {
    if (name.includes("MQ")) return "🔥";
    if (name.includes("Temperature")) return "🌡️";
    if (name.includes("Humidity")) return "💧";
    if (name.includes("PIR") || name.includes("motion")) return "🚶";
    return "📟"; // default IoT icon
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}
