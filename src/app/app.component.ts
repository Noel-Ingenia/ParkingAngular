import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
import { Users } from './models/Users';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [UsersService]
  providers: [AuthenticationService]
})
export class AppComponent {
  /*title = 'pruebaSQL';
  userslist: Users[] = null;

  usuario = new Users(0, 'Email', 'Password');
  users: UsersService;

  constructor(users: UsersService) {
    this.users = users;

    users.getAllUsers().subscribe(
      (data: any ) => {
        this.userslist = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  public createUser() {
    this.users.postUser(this.usuario).subscribe(
      (data: any ) => {
        console.log('SUCCESS : ' + data);
      },
      error => {
        console.log('ERROR : ' + error);
      }
    );
  }*/
}
