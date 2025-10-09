import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelCreatedGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const hotelCreated = sessionStorage.getItem('hotelCreated');

    if (hotelCreated === 'true') {
      return true;
    }

    this.router.navigate(['/create-hotel']);
    return false;
  }
}
