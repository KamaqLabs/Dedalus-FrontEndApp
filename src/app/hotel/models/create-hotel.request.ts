export class CreateHotelRequest {
  name: string;
  ruc: string;
  address: string;

  constructor(name: string, ruc: string, address: string) {
    this.name = name;
    this.ruc = ruc;
    this.address = address;
  }
}
