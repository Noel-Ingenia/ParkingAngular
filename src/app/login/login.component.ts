import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Users} from '../models/Users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users : Users[];
  constructor(private usersService : UsersService) { }

  ngOnInit() {
    this.usersService.getAllUsers().subscribe(
    (data: any[] ) => {
      this.users = data;
      console.log(data);

  })

}
}
