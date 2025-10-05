import { Component } from '@angular/core';
import {IamService} from '../../services/iam.service';
import {Administrator} from '../../../profiles/models/administrator.entity';
import {FormsModule} from '@angular/forms';
import {ErrorSnackbar} from '../../../public/components/error-snackbar/error-snackbar';

@Component({
  selector: 'app-sign-in-form-component',
  imports: [
    FormsModule,
    ErrorSnackbar
  ],
  standalone: true,
  templateUrl: './sign-in-form-component.html',
  styleUrl: './sign-in-form-component.css'
})
export class SignInFormComponent {
  errorMessage: string = "";
  constructor(
    private iamService: IamService
  ) {
  }


  signIn(username: string, password: string): void {
    this.iamService.SignIn({ username, password }).subscribe({
      next: (data: Administrator) => {
        console.log(data);
      },
      error: (error) => {
        this.errorMessage = ""; // Fuerza el cambio
        setTimeout(() => {
          this.errorMessage = error?.error?.message || "Error desconocido";
        }, 0);
      }
    });
  }
}
