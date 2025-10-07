import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';
import {AdministratorProfileService} from '../../services/administrator-profile.service';
import {CreateAdministratorProfileRequest} from '../../models/create-administrator-profile.request';
import {SnackbarErrorService} from '../../../public/services/snackbar-error.service';
import {SessionStorageService} from '../../../public/services/session-storage.service';
import {Hotel} from '../../../hotel/models/hotel.entity';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-administrator-form-component',
  imports: [
    NgClass,
    FormsModule
  ],
  templateUrl: './create-administrator-form-component.html',
  styleUrl: './create-administrator-form-component.css'
})
export class CreateAdministratorFormComponent {
  showPassword = false;

  constructor(
    private administratorProfileService: AdministratorProfileService,
    private snackbarError: SnackbarErrorService,
    private sessionStorageService: SessionStorageService,
    private router: Router,
  ) {
  }

  CreateAdministrator(username:string, password:string, firstName:string, lastName:string, dni: string, email:string, phoneNumber:string): void {
    const request: CreateAdministratorProfileRequest ={
      username: username,
      password: password,
      dni: dni,
      email: email,
      name: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber
    }
    const hotel: Hotel|null = this.sessionStorageService.getHotel();

    if(!hotel){
      this.snackbarError.show('No hotel found in session', 4000);
      return;
    }

    this.administratorProfileService.createAdministratorProfile(request,hotel.id).subscribe(
      {
        next: (data) => {
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.snackbarError.show(err?.error?.message || 'Error desconocido', 4000);
        }
      }
    )
  }
}
