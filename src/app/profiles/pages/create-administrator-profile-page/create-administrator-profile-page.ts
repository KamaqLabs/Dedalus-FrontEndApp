import { Component } from '@angular/core';
import {
  CreateAdministratorFormComponent
} from '../../components/create-administrator-form-component/create-administrator-form-component';

@Component({
  selector: 'app-create-administrator-profile-page',
  imports: [
    CreateAdministratorFormComponent,
  ],
  templateUrl: './create-administrator-profile-page.html',
  styleUrl: './create-administrator-profile-page.css'
})
export class CreateAdministratorProfilePage {

}
