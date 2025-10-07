import { Component } from '@angular/core';
import {SessionStorageService} from '../../services/session-storage.service';
import {IamService} from '../../../iam/services/iam.service';
import {Administrator} from '../../../profiles/models/administrator.entity';
import {SnackbarErrorService} from '../../services/snackbar-error.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tool-bar',
  imports: [],
  templateUrl: './tool-bar.html',
  styleUrl: './tool-bar.css'
})
export class ToolBar {
  constructor(
    private sessionStorageService: SessionStorageService,
    private iamService: IamService,
    private snackbarError: SnackbarErrorService,
    private router: Router
    ) {}

  isAuthenticated(): boolean {
    return this.sessionStorageService.authenticated();
  }

  logout(): void {

    const profile: Administrator | null = this.sessionStorageService.getProfile();

    if(!profile)
    {
      this.snackbarError.show("usuario invalido", 4000);
      return
    }
    this.iamService.LogOut(profile.accountId).subscribe({
      next: () => {
        this.router.navigate(['/']);
        this.sessionStorageService.clear();
      },
      error: (err) => {
        console.log(err);
        this.snackbarError.show(err, 4000);
      }
    });


  }
}
