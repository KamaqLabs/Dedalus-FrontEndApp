export class CreateAdministratorProfileFromInvitation {
  username: string;
  password: string;
  name: string;
  lastName: string;
  dni: string;
  phoneNumber: string;
  invitationToken: string;

  constructor(
    username: string,
    password: string,
    name: string,
    lastName: string,
    dni: string,
    phoneNumber: string,
    invitationToken: string
  ) {
    this.username = username;
    this.password = password;
    this.name = name;
    this.lastName = lastName;
    this.dni = dni;
    this.phoneNumber = phoneNumber;
    this.invitationToken = invitationToken;
  }
}
