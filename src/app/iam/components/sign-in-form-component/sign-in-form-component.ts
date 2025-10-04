import { Component } from '@angular/core';
import {IamService} from '../../services/iam.service';
import {Administrator} from '../../../profiles/models/administrator.entity';
import {FormsModule} from '@angular/forms';

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
  constructor(
    private iamService: IamService
  ) {
  }


  signIn(username:string, password:string): void {
    this.iamService.SignIn({username: username, password: password}).subscribe({
      next: (data: Administrator) => {
        console.log(data);
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });

  }
}
