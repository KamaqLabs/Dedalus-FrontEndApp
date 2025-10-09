import { Component } from '@angular/core';
import { AdministratorProfileService } from '../../services/administrator-profile.service';
import {FormsModule} from '@angular/forms';
import {SessionStorageService} from '../../../public/services/session-storage.service';
import {Hotel} from '../../../hotel/models/hotel.entity';

@Component({
  selector: 'app-generate-invitation-url-component',
  templateUrl: './generate-invitation-url-component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./generate-invitation-url-component.css']
})
export class GenerateInvitationUrlComponent {
  email: string = '';
  invitationUrl: string | null = null;
  showModal: boolean = false;
  loading: boolean = false;
  error: string | null = null;

  constructor(private profileService: AdministratorProfileService,
              private sessionService: SessionStorageService
              ) {}

  generateUrl() {
    this.loading = true;
    this.error = null;
    this.showModal = true; // El modal aparece siempre al presionar el botón
    const hotel:Hotel = this.sessionService.getHotel();

    this.profileService.generateAdministratorProfileInvitationUrl(this.email)
      .subscribe({
        next: (url: string) => {
          this.invitationUrl = `${url}/${hotel.id}`;
          this.loading = false;
        },
        error: () => {
          this.error = 'Error generando la invitación';
          this.loading = false;
        }
      });
  }

  copyUrl() {
    if (this.invitationUrl) {
      navigator.clipboard.writeText(this.invitationUrl);
    }
  }

  closeModal() {
    this.showModal = false;
    this.invitationUrl = null;
  }
}
