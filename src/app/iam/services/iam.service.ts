import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Administrator} from '../../profiles/models/administrator.entity';
import {SignInRequest} from '../models/sign-in.request';
import {catchError, retry, throwError} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class IamService extends BaseService<Administrator>{


  constructor() {
    super();
    this.resourceEndpoint = 'authentication/sign-in';
  }

  public SignIn(signInRequest: SignInRequest) {
    return this.http.post<Administrator>(`${this.basePath}${this.resourceEndpoint}`, JSON.stringify(signInRequest), this.httpOptions)
      .pipe(
        retry(2),
        catchError(error => {
          console.error('Error en SignIn:', error);
          return throwError(() => error);
        })
      );
  }



}
