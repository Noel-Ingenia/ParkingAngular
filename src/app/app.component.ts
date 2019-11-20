import { Component } from '@angular/core';
import { AccountService } from './accounts.service';
import { Account } from './models/Account';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})
export class AppComponent {
  title = 'pruebaSQL';
  accountlist : Account[] = null;

  usuario = new Account(0, "Email", "Password");
  account: AccountService;

  constructor (account: AccountService ) {
    this.account = account;

    account.getAllAccounts().subscribe(
      (data: any ) => {
        this.accountlist = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  public createUser() {
    this.account.postUser(this.usuario).subscribe(
      (data: any ) => {
        console.log("SUCCESS : " + data);
      },
      error => {
        console.log("ERROR : " + error);
      }
    );
  }
}