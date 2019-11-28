/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
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
@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  public user: Users;
  constructor(
    private storageService: StorageService,
    private authenticationService: AuthenticationService
  ) { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.user = this.storageService.getCurrentUser();
  }
  public logout(): void {
    this.storageService.logout();
  }
}
