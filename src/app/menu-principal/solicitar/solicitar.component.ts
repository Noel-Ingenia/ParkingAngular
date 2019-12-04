import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import { Users } from 'src/app/models/Users';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Solicitar } from 'src/app/models/Solicitar';

@Component({
  selector: 'app-solicitar',
  templateUrl: './solicitar.component.html',
  styleUrls: ['./solicitar.component.css']
})
export class SolicitarComponent implements OnInit {

  public user: Users;
  private basePath = 'http://192.168.19.116:3000';
  formDate: FormGroup;
  constructor(
    private http: HttpClient,
    public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formDate = this.formBuilder.group({date: [{begin: new Date(), end: new Date()}]
  });
}

public submitSolicitar() {
    if (this.formDate.valid) {
      this.crearSolicitud(this.formDate.value).subscribe(res => {console.log("¡Se ha creado!");})
    }
}

public crearSolicitud(data): Observable<Solicitar> {
  console.log(data);
  return this.http.post<Solicitar>(this.basePath + 'requests?IdUser=' + this.user.Id, data);
}
}
