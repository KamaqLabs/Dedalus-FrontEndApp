import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { SessionStorageService } from "../../public/services/session-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private sessionStorageService: SessionStorageService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.sessionStorageService.authenticated()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
