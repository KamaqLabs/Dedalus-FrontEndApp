import { Component } from '@angular/core';
import {RoomClassService} from '../../services/room-class.service';
import {SessionStorageService} from '../../../public/services/session-storage.service';
import {Hotel} from '../../../hotel/models/hotel.entity';
import {CreateRoomClassRequest} from '../../models/create-room-class-request';
import {RoomClass} from '../../models/room-class.entity';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {SnackbarErrorService} from '../../../public/services/snackbar-error.service';

@Component({
  selector: 'app-create-room-class-form',
  imports: [
    FormsModule
  ],
  templateUrl: './create-room-class-form.html',
  styleUrl: './create-room-class-form.css'
})
export class CreateRoomClassForm {

  constructor(
    private roomClassService:RoomClassService,
    private sessionStorage: SessionStorageService,
    private snackbarError: SnackbarErrorService,
  ) {}

  CreateRoomClass(name:string, description:string, pricePerNight:number, maxOccupancy:number) {
    const hotel:Hotel = this.sessionStorage.getHotel();
    if (hotel) {
      const roomClassRequest = new CreateRoomClassRequest(name, maxOccupancy,pricePerNight,  description);
      this.roomClassService.CreateRoomClass(roomClassRequest, hotel.id).subscribe({
        next: (roomClass: RoomClass) => {
        },
        error: (error: any) => {
          this.snackbarError.show(error?.error?.message || 'Error desconocido', 4000);
        }
      });
    } else {
      console.error('No hotel ID found in session storage.');
      // Optionally, provide user feedback about the missing hotel ID here
    }

  }

  protected readonly Number = Number;
}
