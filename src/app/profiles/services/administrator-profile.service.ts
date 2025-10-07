import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Administrator} from '../models/administrator.entity';
import {CreateAdministratorProfileRequest} from '../models/create-administrator-profile.request';
import {environment} from '../../../environments/environment';

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

}
