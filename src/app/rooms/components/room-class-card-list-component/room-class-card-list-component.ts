import {Component, OnInit} from '@angular/core';
import {RoomClassService} from '../../services/room-class.service';
import {SessionStorageService} from '../../../public/services/session-storage.service';
import {Hotel} from '../../../hotel/models/hotel.entity';
import {RoomClass} from '../../models/room-class.entity';
import {Observable} from 'rxjs';
import {RoomClassCardComponent} from '../room-class-card-component/room-class-card-component';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-room-class-card-list-component',
  imports: [
    RoomClassCardComponent,
    AsyncPipe
  ],
  templateUrl: './room-class-card-list-component.html',
  styleUrl: './room-class-card-list-component.css'
})
export class RoomClassCardListComponent implements OnInit {

  constructor(
    public roomClassService: RoomClassService,
    public sessionService: SessionStorageService
  ) {}

  roomClasses$!: Observable<RoomClass[]>;

  ngOnInit(): void {
    const hotel:Hotel = this.sessionService.getHotel();
    if (hotel) {
      this.roomClassService.loadRoomClasses(hotel.id);
      this.roomClasses$ = this.roomClassService.roomClasses$;
    } else {
      this.roomClasses$ = new Observable<RoomClass[]>(observer => observer.next([]));
    }
  }


  getRoomClasses(): Observable<RoomClass[]> {
    const hotel: Hotel = this.sessionService.getHotel();
    if (!hotel) return new Observable<RoomClass[]>(observer => observer.next([]));
    return this.roomClassService.GetRoomClassesByHotelId(hotel.id);
  }

  onDeleteRoom(roomId: number): void {
    console.log(roomId);
    this.roomClassService.DeleteRoomClass(roomId).subscribe();
  }

}
