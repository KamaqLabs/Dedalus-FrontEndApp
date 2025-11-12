
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private readonly apiUrl = 'http://localhost:3000/reservations';

  constructor(private http: HttpClient) {}

  // Obtener todas las reservas
  getAll(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl);
  }

  // Obtener una reserva por ID
  getById(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.apiUrl}/${id}`);
  }

  // Crear una nueva reserva
  create(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.apiUrl, reservation);
  }

  // Actualizar una reserva existente
  update(id: number, reservation: Partial<Reservation>): Observable<Reservation> {
    return this.http.patch<Reservation>(`${this.apiUrl}/${id}`, reservation);
  }

  // Eliminar una reserva
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
