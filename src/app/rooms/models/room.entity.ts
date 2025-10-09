import {RoomClass} from './room-class.entity';

export class Room {
  id: number;
  hotelId: number;
  roomClassId: number;
  roomNumber: string;
  floor: number;
  nfcKey: string;
  modulesId: number[];
  roomStatus: string;
  roomClass?: RoomClass;

  constructor(
    id: number,
    hotelId: number,
    roomClassId: number,
    roomNumber: string,
    floor: number,
    nfcKey: string,
    modulesId: number[],
    roomStatus: string,
    roomClass?: RoomClass
  ) {
    this.id = id;
    this.hotelId = hotelId;
    this.roomClassId = roomClassId;
    this.roomNumber = roomNumber;
    this.floor = floor;
    this.nfcKey = nfcKey;
    this.modulesId = modulesId;
    this.roomStatus = roomStatus;
    this.roomClass = roomClass;
  }
}
