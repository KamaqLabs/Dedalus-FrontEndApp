import { Component } from '@angular/core';
import {CreateRoomForm} from '../../components/create-room-form/create-room-form';
import {RoomTable} from '../../components/room-table/room-table';
import {Room} from '../../models/room.entity';

@Component({
  selector: 'app-create-room-page',
  imports: [
    CreateRoomForm,
    RoomTable
  ],
  templateUrl: './create-room-page.html',
  styleUrl: './create-room-page.css'
})
export class CreateRoomPage {

  rooms: Room[] = [];

  onRoomCreated(newRoom: Room) {
    this.rooms = [newRoom, ...this.rooms];
  }

}
