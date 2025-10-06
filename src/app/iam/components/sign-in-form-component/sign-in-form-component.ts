import { Component } from '@angular/core';
import {IamService} from '../../services/iam.service';
import {SessionStorageService} from '../../../public/services/session-storage.service';
import {FormsModule} from '@angular/forms';
import {SnackbarErrorService} from '../../../public/services/snackbar-error.service';
import {Router} from '@angular/router';
import {SignInResponse} from '../../models/sign-in.response';
import {AdministratorProfileService} from '../../../profiles/services/administrator-profile.service';
import {Administrator} from '../../../profiles/models/administrator.entity';

@Component({
  selector: 'app-sign-in-form-component',
  imports: [
    FormsModule
  ],
  standalone: true,
  templateUrl: './sign-in-form-component.html',
  styleUrl: './sign-in-form-component.css'
})
export class SignInFormComponent {
  errorMessage: string = "";
  constructor(
    private iamService: IamService,
    private snackbarError: SnackbarErrorService,
    private router: Router,
    private sessionStorageService: SessionStorageService,
    private administratorProfileService: AdministratorProfileService,
  ) {
  }


  signIn(username: string, password: string): void {
    this.iamService.SignIn({ username, password }).subscribe({
      next: (data: SignInResponse) => {
        this.administratorProfileService.getByAccountId(data.profileId).subscribe({
          next: (admin: Administrator) => {
            this.sessionStorageService.set("profile", admin);
            this.sessionStorageService.set('isAuthenticated', true);
            this.router.navigate(['/dashboard']);
          },
          error: (err) => {
            this.snackbarError.show(err?.error?.message || 'Error desconocido', 4000);
          }
        });
      },
      error: (err) => {
        this.snackbarError.show(err?.error?.message || 'Error desconocido', 4000);
      }
    });
  }


}
