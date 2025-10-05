import { Component } from '@angular/core';
import {IamService} from '../../services/iam.service';
import {Administrator} from '../../../profiles/models/administrator.entity';
import {FormsModule} from '@angular/forms';
import {SnackbarErrorService} from '../../../public/services/snackbar-error.service';

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
    private snackbarError: SnackbarErrorService
  ) {
  }


  signIn(username: string, password: string): void {
    this.iamService.SignIn({ username, password }).subscribe({
      next: (data: Administrator) => {
        console.log(data);
      },
      error: (err) => {
        this.snackbarError.show(err?.error?.message || 'Error desconocido', 4000);
      }
    });
  }
}
