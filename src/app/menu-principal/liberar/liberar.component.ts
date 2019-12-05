import { Component, OnInit, NgZone } from '@angular/core';
import {StorageService} from '../../services/storage.service';
import {Users} from '../../models/Users';
import {AuthenticationService} from '../../services/authentication.service';
import * as jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';
import { Session } from '../../models/Session';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SatCalendar, SatCalendarFooter, SatDatepicker } from 'saturn-datepicker';
import { DateAdapter } from 'saturn-datepicker';
import {MatDatepickerModule} from '@angular/material/datepicker';
import * as moment from 'moment';
import { Liberar } from 'src/app/models/Liberar';
import { Router } from '@angular/router';



@Component({
  selector: 'app-liberar',
  templateUrl: './liberar.component.html',
  styleUrls: ['./liberar.component.css']
})
export class LiberarComponent implements OnInit {

  public user: Users;
  private basePath = 'http://192.168.19.116:3000/';
  public datosPlazas;
    // PARA SELECCION LIBERACION PLAZA //
    formDate: FormGroup;


  constructor(
    private storageService: StorageService,
    private authenticationService: AuthenticationService,
    private http: HttpClient,
    private router: Router,
    // PARA SELECCION LIBERACION PLAZA //
    public formBuilder: FormBuilder
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
        // console.log(moment(data[0].SelectedDay).format() + ' ' );
        console.log(data);
      }

    );

    // PARA SELECCION LIBERACION PLAZA //
    this.formDate = this.formBuilder.group({
      date: [{begin: new Date(), end: new Date()}]
    });

  }

      // PARA SELECCION LIBERACION PLAZA //


  public submitLiberar(){
    if (this.formDate.valid) {
      this.createLiberar(this.formDate.value).subscribe(res => {
        console.log('creado!');
      });
      this.router.navigate(['/liberar']);
      // this.formDate.setItem('currentUser', JSON.stringify(session));
      // return this.http.post(this.basePath + 'releases', this.formDate);
    }

  }

      ////// DATOS USUARIO Y PLAZA///
      datosPlaza(): Observable<Session> {
          return this.http.get<Session>(this.basePath + 'releases?IdUser=' + this.user.Id);
      }

      createLiberar(data): Observable<Liberar> {
        console.log(data);
        return this.http.post<Liberar>(this.basePath + 'releases?IdUser=' + this.user.Id, data);
      }

}
