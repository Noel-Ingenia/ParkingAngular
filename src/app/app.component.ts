import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { Users } from './models/Users'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent {
  title = 'pruebaSQL';
  userslist : Users[] = null;

  constructor (users: UsersService) {
    users.getAllUsers().subscribe(
      (data: any ) => {
        //this.userslist = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}
