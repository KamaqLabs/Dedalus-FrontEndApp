import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { AdministratorProfileService } from '../../services/administrator-profile.service';
import { CreateAdministratorProfileFromInvitation } from '../../models/create-administrator-profile-from-invitation';
import {SnackbarErrorService} from '../../../public/services/snackbar-error.service';

@Component({
  selector: 'app-create-profile-from-invitation',
  templateUrl: './create-profile-from-invitation.html',
  styleUrl: './create-profile-from-invitation.css',
  imports: [
    ReactiveFormsModule
  ],
  providers: [AdministratorProfileService]
})
export class CreateProfileFromInvitation {
  form: FormGroup;
  hotelId: number;
  invitationToken: string;
  success: boolean = false;
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: AdministratorProfileService,
    private router: Router,
    private snackbarError: SnackbarErrorService
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      dni: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    });

    this.hotelId = Number(this.route.snapshot.paramMap.get('hotelId'));
    this.invitationToken = this.route.snapshot.paramMap.get('token') || '';
    this.service.verifyInvitationToken(this.invitationToken).subscribe(
      {
        next: (data) => {
          if(data == "valid"){
            console.log("Token is valid");
          }
          else{
            this.snackbarError.show( 'Invitation Link Invalid :(', 4000);
            this.router.navigate(['/']);
          }
        },
        error: (err) => {
          this.snackbarError.show(err?.error?.message || 'Error desconocido', 4000);
        }
      }
    )

  }

  submit() {
    if (this.form.invalid) return;

    const request = new CreateAdministratorProfileFromInvitation(
      this.form.value.username,
      this.form.value.password,
      this.form.value.name,
      this.form.value.lastname,
      this.form.value.dni,
      this.form.value.phoneNumber,
      this.invitationToken
    );

    this.service.createAdministratorProfileFromInvitation(request, this.hotelId)
      .subscribe({
        next: () => {
          this.success = true;
          this.router.navigate(['/login']);
        },
        error: (err) => {
          this.snackbarError.show(err?.error?.message || 'Error desconocido', 4000);
        }
      });
  }
}
