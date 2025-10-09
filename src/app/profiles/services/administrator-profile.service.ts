import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Administrator} from '../models/administrator.entity';
import {CreateAdministratorProfileRequest} from '../models/create-administrator-profile.request';
import {environment} from '../../../environments/environment';
import {CreateAdministratorProfileFromInvitation} from '../models/create-administrator-profile-from-invitation';

@Injectable({
  providedIn: 'root'
})
export class AdministratorProfileService extends BaseService<Administrator>{
  constructor() {
    super();
    this.resourceEndpoint = 'profile/administrator-profiles';
  }

  public getByAccountId(accountId: number) {
    return this.http.get<Administrator>(`${this.basePath}${this.resourceEndpoint}/by-account/${accountId}`, this.httpOptions);
  }

  public createAdministratorProfile(administratorRequest: CreateAdministratorProfileRequest, hotelId: number) {
    return this.http.post<Administrator>(`${this.basePath}${this.resourceEndpoint}/${hotelId}`, JSON.stringify(administratorRequest), this.httpOptions);
  }

  public getAdministratorsByHotelId(hotelId: number) {
    return this.http.get<Administrator[]>(`${this.basePath}${this.resourceEndpoint}/by-hotel/${hotelId}`, this.httpOptions);
  }

  generateAdministratorProfileInvitationUrl(email: string) {
    return this.http.post<string>(
      `${this.basePath}profiles/administrator-profiles/invitations`,
      { email },
      { responseType: 'text' as 'json' }
    );
  }

  public verifyInvitationToken(token: string) {
    return this.http.get<string>(
      `${this.basePath}profiles/administrator-profiles/invitations/verify?token=${token}`,
      {
        responseType: 'text' as 'json'
      }
    );
  }

  public createAdministratorProfileFromInvitation(request: CreateAdministratorProfileFromInvitation  ,hotelId:number) {
    return this.http.post<Administrator>(`${this.basePath}profiles/administrator-profiles/invitations/accept/${hotelId}`, JSON.stringify(request), this.httpOptions);
  }

}
