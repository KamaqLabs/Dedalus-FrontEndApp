import {Component, OnInit} from '@angular/core';
import {IamService} from '../../services/iam.service';

@Component({
  selector: 'app-sign-in-page',
  imports: [],
  templateUrl: './sign-in-page.html',
  styleUrl: './sign-in-page.css'
})
export class SignInPage implements OnInit {

  constructor(
    private iamService: IamService
  ) {
  }

   ngOnInit(): void {
    this.iamService.SignIn({username: 'Dedalus', password: 'Admin123admin'}).subscribe({
     next: (data) => {
       console.log(data);
       },
       error: (error) => {
         console.error('There was an error!', error);
       }
     });
  }




}
