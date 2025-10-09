import {Component, OnInit} from '@angular/core';
import {
  DashboardCardInformationComponent
} from '../dashboard-card-information-component/dashboard-card-information-component';
import {SessionStorageService} from '../../../public/services/session-storage.service';
import {RoomClass} from '../../../rooms/models/room-class.entity';
import {RoomService} from '../../../rooms/services/room.service';
import {RoomClassService} from '../../../rooms/services/room-class.service';
import {Room} from '../../../rooms/models/room.entity';
import {HotelCreatedGuard} from '../../../hotel/models/hotel-created.guard';
import {Hotel} from '../../../hotel/models/hotel.entity';
import {forkJoin} from 'rxjs';
import {Administrator} from '../../../profiles/models/administrator.entity';

@Component({
  selector: 'app-dashboard-cards-list-component',
  imports: [
    DashboardCardInformationComponent
  ],
  templateUrl: './dashboard-cards-list-component.html',
  styleUrl: './dashboard-cards-list-component.css'
})
export class DashboardCardsListComponent implements OnInit {
  constructor(
    private sessionService: SessionStorageService,
    private roomService: RoomService,
    private roomClassesService: RoomClassService,

  ) {
  }

  cards: any[] = []; // Inicializar vacío
  isLoading = true;

  roomValue!: string;
  roomClassValue!: string;

  ngOnInit(): void {
    this.loadData();
  }
  private loadData(): void {
    const profile: Administrator = this.sessionService.getProfile();
    console.log(profile);
    // Primero inicializar con loading
    this.cards = [
      { title: 'Total Rooms', value: '...', icon: 'meeting_room', link: '/rooms' },
      { title: 'Active Bookings', value: '0', icon: 'collections_bookmark', link: '/bookings' },
      { title: 'Room Classes', value: '...', icon: 'pages' , link: '/room-classes' },
    ];

    this.roomService.GetRoomsByHotelId(profile.hotelId).subscribe({
      next: (rooms: Room[]) => {
        this.roomValue = rooms.length.toString();
        this.cards[0].value = this.roomValue;
      }
    });

    this.roomClassesService.GetRoomClassesByHotelId(profile.hotelId).subscribe({
      next: (roomClasses: RoomClass[]) => {
        this.roomClassValue = roomClasses.length.toString();
        this.cards[2].value = this.roomClassValue;
      }
    });
  }
}
