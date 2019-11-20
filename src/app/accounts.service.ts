import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Account } from './models/Account';

@Injectable()
export class AccountService {
  constructor(private http: HttpClient) {}

  public getAllAccounts() {
    return this.http.get<Account[]>('http://localhost:3000/users');
  }

  public postUser(usuario : Account) {
    return this.http.post('http://localhost:3000/users', usuario)
  }
}