import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval, switchMap, shareReplay } from 'rxjs';
import { IotSensor } from '../models/iot-sensor.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private readonly apiUrl = 'http://localhost:3000/IOT_sensor';

  constructor(private http: HttpClient) {}

  /**
   * Get current IoT sensor values from the json-server
   */
  getSensors(): Observable<IotSensor> {
    return this.http.get<IotSensor>(this.apiUrl);
  }

  /**
   * Update one or more IoT sensor values (PATCH)
   * Example: updateSensor({ buzzer1: 1 })
   */
  updateSensor(data: Partial<IotSensor>): Observable<IotSensor> {
    return this.http.patch<IotSensor>(this.apiUrl, data);
  }

  /**
   * Automatically polls the server every few seconds to get fresh data
   */
  pollSensors(intervalMs: number = 3000): Observable<IotSensor> {
    return interval(intervalMs).pipe(
      switchMap(() => this.getSensors()),
      shareReplay(1) // Cache last value for subscribers
    );
  }
}
