import {Component, OnInit} from '@angular/core';
import {SignInFormComponent} from '../../components/sign-in-form-component/sign-in-form-component';
import {IamService} from '../../services/iam.service';
import {Router} from '@angular/router';
import {AdministratorProfileService} from '../../../profiles/services/administrator-profile.service';
import {SessionStorageService} from '../../../public/services/session-storage.service';
import {SnackbarErrorService} from '../../../public/services/snackbar-error.service';

@Component({
  selector: 'app-sign-in-page',
  imports: [
    SignInFormComponent
  ],
  standalone: true,
  templateUrl: './sign-in-page.html',
  styleUrl: './sign-in-page.css'
})
export class SignInPage implements OnInit {

    constructor(
      private iamService: IamService,
      private administratorProfileService: AdministratorProfileService,
      private sessionStorageService: SessionStorageService,
      private snackbarError: SnackbarErrorService,
      private router:Router,
    ) {}

  ngOnInit(): void {
    this.sessionStorageService.setAuthenticated(false);
    this.iamService.AuthenticationMe().subscribe({
      next: (data) => {
        this.administratorProfileService.getByAccountId(data.id).subscribe({
          next: (admin) => {
            this.sessionStorageService.setProfile(admin);
            this.sessionStorageService.setAuthenticated(true);
            this.router.navigate(['/dashboard']);
          },
          error: (err) => {
            this.snackbarError.show(err?.error?.message || 'Error desconocido', 4000);
          }
        });
      },
      error: (err) => {
        console.log('User not yet authenticated ', err);
      }
    });
  }
}
