import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Users} from '../models/Users';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private usersService: UsersService) { }
  users: Users[];
  hide = true;
  ngOnInit() {
    this.usersService.getAllUsers().subscribe(
    (data: any[] ) => {
      this.users = data;
      console.log(data);

    });
  }


}
