export class Administrator {
  id: number;
  accountId: number;
  name: string;
  lastName: string;
  dni: string;
  email: string;
  phoneNumber: string;
  hotelId: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(id: number, accountId: number, name: string, lastName: string, dni: string, email: string, phoneNumber: string, hotelId:number ,createdAt: Date, updatedAt: Date) {
    this.id = id;
    this.accountId = accountId;
    this.name = name;
    this.lastName = lastName;
    this.dni = dni;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.hotelId = hotelId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
