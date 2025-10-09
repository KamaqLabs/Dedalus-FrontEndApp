import { Component } from '@angular/core';
import {
  CreateProfileFromInvitation
} from '../../components/create-profile-from-invitation/create-profile-from-invitation';

@Component({
  selector: 'app-create-admin-from-invitation-page',
  imports: [
    CreateProfileFromInvitation
  ],
  templateUrl: './create-admin-from-invitation-page.html',
  styleUrl: './create-admin-from-invitation-page.css'
})
export class CreateAdminFromInvitationPage {

}
