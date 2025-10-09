export class CreateRoomClassRequest {
  roomClassName: string;
  maxOccupancy: number;
  defaultPricePerNight: number;
  description: string;
  constructor(
    roomClassName: string,
    maxOccupancy: number,
    defaultPricePerNight: number,
    description: string
  ) {
    this.roomClassName = roomClassName;
    this.maxOccupancy = maxOccupancy;
    this.defaultPricePerNight = defaultPricePerNight;
    this.description = description;
  }
}
