import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SessionStorageService {

  setHotel<Hotel>(value:Hotel): void {
    sessionStorage.setItem("hotel", JSON.stringify(value));
  }

  getHotel<Hotel>(): Hotel  {
    const item = sessionStorage.getItem("hotel");
    return item ? JSON.parse(item) : {} as Hotel;
  }


  setProfile<Profile>(value:Profile): void {
    sessionStorage.setItem("profile", JSON.stringify(value));
  }
  getProfile<Profile>(): Profile {
    const item = sessionStorage.getItem("profile");
    return item ? JSON.parse(item) : {} as Profile;
  }

  authenticated(): boolean {
    const isAuthenticated = sessionStorage.getItem("isAuthenticated");
    return isAuthenticated === 'true';
  }

  setAuthenticated(value: boolean): void {
    sessionStorage.setItem("isAuthenticated", value ? 'true' : 'false');
  }

  remove(key: string): void {
    sessionStorage.removeItem(key);
  }

  clear(): void {
    sessionStorage.clear();
  }
}
