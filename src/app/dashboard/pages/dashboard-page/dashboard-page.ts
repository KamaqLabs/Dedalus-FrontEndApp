import {Component, OnInit} from '@angular/core';
import {SessionStorageService} from '../../../public/services/session-storage.service';
import {HotelService} from '../../../hotel/services/hotel.service';
import {WelcomeBannerComponent} from '../../components/welcome-banner-component/welcome-banner-component';
import {
  DashboardCardsListComponent
} from '../../components/dashboard-cards-list-component/dashboard-cards-list-component';
import {
  GenerateInvitationUrlComponent
} from '../../../profiles/components/generate-invitation-url-component/generate-invitation-url-component';

@Component({
  selector: 'app-dashboard-page',
  imports: [
    WelcomeBannerComponent,
    DashboardCardsListComponent,
    GenerateInvitationUrlComponent
  ],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css'
})
export class DashboardPage implements OnInit {
    constructor(
      private sessionService: SessionStorageService,
      private  hotelService: HotelService,

    ) {}
    ngOnInit(): void {
      console.log(this.sessionService.getProfile());
    }
}
