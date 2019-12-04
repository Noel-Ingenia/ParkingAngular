import {Component, OnInit} from '@angular/core';
import {StorageService} from '../../services/storage.service';
import {Users} from '../../models/Users';
import {AuthenticationService} from '../../services/authentication.service';
import * as jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';
import { Session } from '../../models/Session';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public user: Users;
  private basePath = 'http://192.168.19.116:3000/';
  // private basePath = 'http://localhost:3000/';

  public datosPlazas;

  constructor(
    private storageService: StorageService,
    private authenticationService: AuthenticationService,
    private http: HttpClient
  ) { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    const token = this.storageService.getCurrentUser();
    this.user = jwt_decode(token);
    console.log(this.user);
    // this.user = this.storageService.getCurrentUser();
    this.datosPlaza().subscribe(

      data => {
        this.datosPlazas = data;
        console.log(data);
      }

    );

  }
  ////// DATOS USUARIO Y PLAZA///
    datosPlaza(): Observable<Session> {
       return this.http.get<Session>(this.basePath + 'home?IdUser=' + this.user.Id);
    }




}
