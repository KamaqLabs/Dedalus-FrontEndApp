export class SignInResponse {
  token: string;
  refreshToken: string;
  profileId: number;
  username: string;
  rol: string;

  constructor(token: string, refreshToken: string, profileId: number, username: string, rol: string) {
    this.token = token;
    this.refreshToken = refreshToken;
    this.profileId = profileId;
    this.username = username;
    this.rol = rol;
  }
}
