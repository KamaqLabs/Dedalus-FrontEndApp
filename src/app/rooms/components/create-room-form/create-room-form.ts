import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SessionStorageService} from '../../../public/services/session-storage.service';
import {RoomClassService} from '../../services/room-class.service';
import {RoomService} from '../../services/room.service';
import { RoomClass } from '../../models/room-class.entity';
import {Hotel} from '../../../hotel/models/hotel.entity';
import {CreateRoomRequest} from '../../models/create-room-request';
import {SnackbarErrorService} from '../../../public/services/snackbar-error.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Room} from '../../models/room.entity';

@Component({
  selector: 'app-create-room-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './create-room-form.html',
  styleUrl: './create-room-form.css'
})
export class CreateRoomForm  implements OnInit {

  form: FormGroup;
  roomClasses: RoomClass[] = [];
  rooms: Room[] = [];


  constructor(
    private fb: FormBuilder,
    private sessionStorage: SessionStorageService,
    private roomService: RoomService,
    private roomClassService: RoomClassService,
    private snackbarError: SnackbarErrorService
  )  {
    this.form = this.fb.group({
      roomNumber: ['', Validators.required],
      floor: [null, Validators.required],
      roomClassId: [null, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    const hotel: Hotel = this.sessionStorage.getHotel();
    if (!hotel) return;
    const { roomNumber, floor } = this.form.value;
    const roomClassId = Number(this.form.value.roomClassId);
    console.log(roomClassId);
    const request = new CreateRoomRequest(roomNumber, floor, roomClassId);
    this.roomService.CreateRoom(request, hotel.id).subscribe({
      next: (response) => {
        console.log('Room created successfully:', response);
        this.form.reset();
      },
      error: (err) => {
        console.error('Error creating room:', err);
        this.snackbarError.show(err?.error?.message || 'Error desconocido', 4000);
      }
    });
  }

  ngOnInit(): void {
    const hotel: Hotel = this.sessionStorage.getHotel();
    if (hotel) {
      this.roomClassService.GetRoomClassesByHotelId(hotel.id).subscribe(data => {
        this.roomClasses = data;
      });
    }
  }


}
