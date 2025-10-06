export class AuthenticationMeResponse {
  public id: number;
  public username: string;
  public rol: string;
  public iat: number;
  public exp: number;

  constructor(id: number, username: string, rol: string, iat: number, exp: number) {
    this.id = id;
    this.username = username;
    this.rol = rol;
    this.iat = iat;
    this.exp = exp;
  }


}
