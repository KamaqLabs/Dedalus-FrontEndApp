export class CreateAdministratorProfileRequest {
  public username: string;
  public password: string;
  public name: string;
  public lastName: string;
  public dni: string;
  public email: string;
  public phoneNumber: string;


  constructor(username: string, password: string, name: string, lastName: string, dni: string, email: string, phoneNumber: string) {
    this.username = username;
    this.password = password;
    this.name = name;
    this.lastName = lastName;
    this.dni = dni;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }

}
