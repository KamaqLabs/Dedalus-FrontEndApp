import { Component } from '@angular/core';
import {
  DashboardCardInformationComponent
} from '../dashboard-card-information-component/dashboard-card-information-component';

@Component({
  selector: 'app-dashboard-cards-list-component',
  imports: [
    DashboardCardInformationComponent
  ],
  templateUrl: './dashboard-cards-list-component.html',
  styleUrl: './dashboard-cards-list-component.css'
})
export class DashboardCardsListComponent {

  cards = [
    { title: 'Rooms', value: '45', icon: 'meeting_room', link: '/rooms' },
    { title: 'Bookings', value: '300', icon: 'collections_bookmark', link: '/clientes' },
    { title: 'Room Classes', value: '5', icon: 'pages', link: '/rooms/room-classes' }
  ];


}
