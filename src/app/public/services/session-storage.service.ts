import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SessionStorageService {
  set<T>(key: string, value: T): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  get<T>(key: string): T | null {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  setHotel<Hotel>(value:Hotel): void {
    sessionStorage.setItem("hotel", JSON.stringify(value));
  }

  getHotel<Hotel>(): Hotel | null {
    const item = sessionStorage.getItem("hotel");
    return item ? JSON.parse(item) : null;
  }


  setProfile<Profile>(value:Profile): void {
    sessionStorage.setItem("profile", JSON.stringify(value));
  }
  getProfile<Profile>(): Profile | null {
    const item = sessionStorage.getItem("profile");
    return item ? JSON.parse(item) : null;
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
