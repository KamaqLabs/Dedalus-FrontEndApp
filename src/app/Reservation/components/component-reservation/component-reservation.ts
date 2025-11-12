import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-component-reservation',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './component-reservation.html',
  styleUrl: './component-reservation.css'
})
export class ComponentReservation implements OnInit {
  reservation = {
    guestCode: '',
    roomId: 1,
    checkInDate: '',
    checkOutDate: ''
  };

  roomAvailable = true;
  private apiUrl = 'http://localhost:3000/reservation';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadReservation();
  }

  loadReservation(): void {
    this.http.get<any>(this.apiUrl).subscribe({
      next: (data) => {
        this.reservation = data;
        this.roomAvailable = !data || !data.guestCode;
      },
      error: (err) => console.error('Error loading reservation', err)
    });
  }

  makeReservation(): void {
    const payload = {
      ...this.reservation,
      checkInDate: new Date().toISOString(),
      checkOutDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString()
    };

    this.http.put(this.apiUrl, payload).subscribe({
      next: () => {
        this.roomAvailable = false;
        alert('Reservation successful!');
      },
      error: (err) => console.error('Error saving reservation', err)
    });
  }
}
