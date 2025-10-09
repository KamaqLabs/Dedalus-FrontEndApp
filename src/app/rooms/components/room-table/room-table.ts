import {Component, Input, OnInit} from '@angular/core';
import {RoomService} from '../../services/room.service';
import { SessionStorageService } from '../../../public/services/session-storage.service';
import { Hotel } from '../../../hotel/models/hotel.entity';
import { Room } from '../../models/room.entity';
import {FormsModule} from '@angular/forms';
import {AsyncPipe, NgClass} from '@angular/common';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-room-table',
  imports: [
    FormsModule,
    NgClass,
  ],
  templateUrl: './room-table.html',
  styleUrl: './room-table.css'
})
export class RoomTable implements OnInit {
  rooms!: Room[]; // Observable de habitaciones
  selectedRoom: Room | null = null;


  filterName = '';
  filterFloor: number | null = null;
  filterClass = '';
  filterStatus = '';



  constructor(
    private roomService: RoomService,
    private sessionStorage: SessionStorageService
  ) {}

  openModal(room: Room) {
    this.selectedRoom = room;
  }

  closeModal() {
    this.selectedRoom = null;
  }

  filteredRooms() {
    return this.rooms.filter(room =>
      (!this.filterName || room.roomNumber?.toLowerCase().includes(this.filterName.toLowerCase())) &&
      (!this.filterFloor || room.floor === this.filterFloor) &&
      (!this.filterClass || room.roomClass?.roomClassName?.toLowerCase().includes(this.filterClass.toLowerCase())) &&
      (!this.filterStatus || room.roomStatus === this.filterStatus)
    );
  }

  clearFilters() {
    this.filterName = '';
    this.filterFloor = null;
    this.filterClass = '';
    this.filterStatus = '';
  }


  ngOnInit(): void {
    const hotel: Hotel = this.sessionStorage.getHotel();
    if (hotel) {
      this.roomService.GetRoomsByHotelId(hotel.id).subscribe(
        (data: Room[]) => {
          this.rooms = data;
        },
        (error) => {
          console.error('Error fetching rooms:', error);
        }
      )

    }
  }
}
