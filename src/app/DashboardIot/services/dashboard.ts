import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, interval, switchMap, shareReplay, startWith} from 'rxjs';
import { IotSensor } from '../models/iot-sensor.model';
import {environment} from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private readonly apiUrl = `${environment.edgeServerBasePath}`;
  private readonly sensorsPath = 'devices/ESP32-Dedalus/sensors';

  constructor(private http: HttpClient) {}

  /**
   * Petición única para obtener valores de sensores
   * @KiwiAmenazante
   */
  public getSensors(): Observable<IotSensor[]> {
    const url = `${this.apiUrl}${this.sensorsPath}`;
    return this.http.get<IotSensor[]>(url);
  }

  /**
   * Polling de sensores. Emite inmediatamente y luego cada pollMs milisegundos.
   * shareReplay evita llamadas redundantes para múltiples suscriptores.
   * @KiwiAmenazante
   */
  public getSensorsPoll(pollMs: number = 3000): Observable<IotSensor[]> {
    return interval(pollMs).pipe(
      startWith(0),
      switchMap(() => this.getSensors()),
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }

}
