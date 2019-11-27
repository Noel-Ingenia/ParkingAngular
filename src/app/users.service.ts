import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './models/Users';

@Injectable()
export class UsersService {
  public users: Users[] = null;
  constructor(private http: HttpClient) {}

  public getAllUsers() {
    return this.http.get<any[]>('http://localhost:3000/users');
  }

  public postUser(usuario: Users) {
    return this.http.post('http://localhost:3000/users', usuario);
  }
}
