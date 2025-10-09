import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Administrator} from '../../profiles/models/administrator.entity';
import {SignInRequest} from '../models/sign-in.request';
import {catchError, map, Observable, throwError} from 'rxjs';
import {SignInResponse} from '../models/sign-in.response';
import {AuthenticationMeResponse} from '../models/authentication-me.response';



@Injectable({
  providedIn: 'root'
})
export class IamService extends BaseService<any>{


  constructor() {
    super();
    this.resourceEndpoint = 'authentication/sign-in';
  }

  public SignIn(signInRequest: SignInRequest): Observable<SignInResponse> {
    return this.http.post<any>(
      `${this.basePath}${this.resourceEndpoint}`,
      JSON.stringify(signInRequest),
      { ...this.httpOptions, withCredentials: true }
    )
      .pipe(
        map(response => new SignInResponse(
          response.token,
          response.refreshToken,
          response.profileId,
          response.username,
          response.rol
        )),
        catchError(error => throwError(() => error))
      );
  }

  public AuthenticationMe(): Observable<AuthenticationMeResponse> {
    return this.http.post<any>(
      `${this.basePath}authentication/me`,
      {}, // ✅ Body vacío
      { ...this.httpOptions, withCredentials: true } // ✅ Opciones correctas
    )
      .pipe(
        map(response => new AuthenticationMeResponse(
          response.id,
          response.username,
          response.rol,
          response.iat,
          response.exp
        )),
        catchError(error => throwError(() => error))
      );
  }

  public LogOut(accountId: number): Observable<any> {
    return this.http.post(
      `${this.basePath}authentication/logout/account/${accountId}`,
      {},
      { withCredentials: true, responseType: 'text' as const }
    ).pipe(
      catchError(error => throwError(() => error))
    );
  }
}
