export class RoomClass {
  public id: number;
  public hotelId: number;
  public roomClassName: string;
  public maxOccupancy: number;
  public defaultPricePerNight: number;
  public description: string;

  constructor(
    id: number,
    hotelId: number,
    roomClassName: string,
    maxOccupancy: number,
    defaultPricePerNight: number,
    description: string
  ) {
    this.id = id;
    this.hotelId = hotelId;
    this.roomClassName = roomClassName;
    this.maxOccupancy = maxOccupancy;
    this.defaultPricePerNight = defaultPricePerNight;
    this.description = description;
  }

}
