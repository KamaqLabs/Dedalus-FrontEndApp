import { Component } from '@angular/core';
import {CreateRoomClassForm} from '../../../rooms/components/create-room-class-form/create-room-class-form';
import {
  RoomClassCardListComponent
} from '../../../rooms/components/room-class-card-list-component/room-class-card-list-component';

@Component({
  selector: 'app-create-room-class-page',
  imports: [
    CreateRoomClassForm,
    RoomClassCardListComponent
  ],
  templateUrl: './create-room-class-page.html',
  styleUrl: './create-room-class-page.css'
})
export class CreateRoomClassPage {

}
