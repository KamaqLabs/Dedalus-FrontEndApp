export class CreateRoomRequest {
  roomNumber: string;
  floor: number;
  roomClassId: number;

  constructor(roomNumber: string, floor: number, roomClassId: number) {
    this.roomNumber = roomNumber;
    this.floor = floor;
    this.roomClassId = roomClassId;
  }
}
