import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';
import {LoginObjects} from '../../app/models/LoginObject';
import { Session} from '../../app/models/Session';


@Injectable()

export class AuthenticationService {

  constructor(private http: HttpClient ) { }

  private basePath = 'http://192.168.19.116:3000/';
  login(loginObj: LoginObjects): Observable<Session> {
  return this.http.post<Session>(this.basePath + 'login', loginObj);
  }
  logout(): Observable<boolean> {
  return this.http.post<boolean>(this.basePath + 'logout', {});
  }

}
