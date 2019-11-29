/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/

import {Component, OnInit} from '@angular/core';
import {StorageService} from '../../services/storage.service';
import {Users} from '../../models/Users';
import {AuthenticationService} from '../../services/authentication.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public user: Users;
  constructor(
    private storageService: StorageService,
    private authenticationService: AuthenticationService
  ) { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    const token = this.storageService.getCurrentUser();
    this.user = jwt_decode(token);
    console.log(this.user);
    // this.user = this.storageService.getCurrentUser();
  }

}
