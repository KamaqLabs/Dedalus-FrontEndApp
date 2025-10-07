import { Component } from '@angular/core';
import {HotelService} from '../../services/hotel.service';
import {FormsModule} from '@angular/forms';
import {CreateHotelRequest} from '../../models/create-hotel.request';
import {SessionStorageService} from '../../../public/services/session-storage.service';
import {Hotel} from '../../models/hotel.entity';
import {Router} from '@angular/router';
import {SnackbarErrorService} from '../../../public/services/snackbar-error.service';

@Component({
  selector: 'app-create-hotel-form',
  imports: [
    FormsModule
  ],
  templateUrl: './create-hotel-form.html',
  styleUrl: './create-hotel-form.css'
})
export class CreateHotelForm {


  constructor(
    private hotelService: HotelService,
    private sessionStorageService: SessionStorageService,
    private snackbarError: SnackbarErrorService,
    private router: Router,
  ) {
  }

  createHotel(hotelName: string, ruc: string, address: string): void {
    const request: CreateHotelRequest = {
      name: hotelName,
      ruc: ruc,
      address: address
    };
    this.hotelService.createHotel(request).subscribe({
      next: (response: Hotel) => {
        this.sessionStorageService.setHotel(response);
        this.router.navigate(['/administrator-sign-up']);
      },
      error: (err) => {
        this.snackbarError.show(err?.error?.message || 'Error desconocido', 4000);
      }
    });
  }

}
