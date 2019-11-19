import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class AccountService {
  public accounts: Account[] = null;
  constructor(private http: HttpClient) {}

  public getAllAccounts() {
    return this.http.get<Account[]>('http://localhost:3000/accounts');
  }
}