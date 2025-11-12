// src/app/Reservation/models/reservation.model.ts

export interface Reservation {
  id?: number;
  guestCode: string;
  roomId: number;
  checkInDate: string;
  checkOutDate: string;
}
