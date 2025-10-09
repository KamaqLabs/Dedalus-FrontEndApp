import {Component, OnInit} from '@angular/core';
import {AdministratorProfileService} from '../../../profiles/services/administrator-profile.service';
import {HotelService} from '../../../hotel/services/hotel.service';
import {SessionStorageService} from '../../../public/services/session-storage.service';
import {Hotel} from '../../../hotel/models/hotel.entity';
import {Administrator} from '../../../profiles/models/administrator.entity';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-welcome-banner-component',
  imports: [],
  templateUrl: './welcome-banner-component.html',
  styleUrl: './welcome-banner-component.css'
})
export class WelcomeBannerComponent implements OnInit {

  constructor(
    private hotelService: HotelService,
    private administratorProfileService: AdministratorProfileService,
    private sessionService: SessionStorageService,
  ) {
  }

  hotel?:Hotel;
  profile?:Administrator;


  private loadHotel(hotelId: number): Observable<Hotel> {
    return this.hotelService.getHotelById(hotelId);
  }

  ngOnInit(): void {

    this.profile =this.sessionService.getProfile()

        this.loadHotel(this.profile.hotelId).subscribe({
          next: (data) => {
            this.sessionService.setHotel(data);
            this.hotel = data;
          },
          error: (error) => {
            console.error('Error loading hotel data:', error);
          }
        });
    }
}
