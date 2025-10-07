export class Hotel {

  public id: number;
  public name: string;
  public ruc: string;
  public address: string;

  constructor(id: number, name: string, ruc: string, address: string) {
    this.id = id;
    this.name = name;
    this.ruc = ruc;
    this.address = address;
  }

}
