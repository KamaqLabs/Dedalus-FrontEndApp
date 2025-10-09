import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Room} from '../models/room.entity';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService extends BaseService<Room>{

  private roomsSubject = new BehaviorSubject<Room[]>([]);
  rooms$ = this.roomsSubject.asObservable();

  constructor() {
    super();
    this.resourceEndpoint = 'hotel/rooms';
  }



  public CreateRoom(createRoomRequest: any, hotelId: number) {
    return this.http.post<Room>(
      `${this.basePath}${this.resourceEndpoint}/${hotelId}`,
      JSON.stringify(createRoomRequest),
      { ...this.httpOptions, withCredentials: true }
    );
  }

  public DeleteRoom(roomId: number) {
    return this.http.delete<any>(
      `${this.basePath}${this.resourceEndpoint}/delete/${roomId}`,
      { ...this.httpOptions, withCredentials: true }
    );
  }

  public GetRoomsByHotelId(hotelId: number) {
    return this.http.get<Room[]>(
      `${this.basePath}${this.resourceEndpoint}/ByHotel/${hotelId}`,
      { ...this.httpOptions, withCredentials: true }
    );
  }

}
