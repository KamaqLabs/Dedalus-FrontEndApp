import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, interval, switchMap, shareReplay, startWith, map, catchError, of} from 'rxjs';
import { IotSensor } from '../models/iot-sensor.model';
import {environment} from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private readonly apiUrl = `${environment.edgeServerBasePath}`;
  private readonly sensorsPath = '/sensors';

  constructor(private http: HttpClient) {}

  /**
   * Petición única para obtener valores de sensores
   * @KiwiAmenazante
   */
  public getSensors(): Observable<IotSensor[]> {
    const url = `${this.apiUrl}${this.sensorsPath}`;
    console.log('GET', url);
    return this.http.get<any[]>(url).pipe(
      map(items => items.map(i => ({
        id: i.id,
        device: i.device,
        sensor: i.sensor,
        // mantener nombres tal cual vienen del backend; parseo fechas
        created_at: i.created_at ? new Date(i.created_at) : undefined,
        updated_at: i.updated_at ? new Date(i.updated_at) : undefined
      } as unknown as IotSensor))),
      catchError(err => {
        console.error('Error obteniendo sensors:', err);
        return of([] as IotSensor[]);
      })
    );
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
