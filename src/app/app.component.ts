import { Component } from '@angular/core';
import { AccountService } from './accounts.service';
import { Account } from './models/Account'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})
export class AppComponent {
  title = 'pruebaSQL';
  accountlist : Account[] = null;

  constructor (account: AccountService) {
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

}