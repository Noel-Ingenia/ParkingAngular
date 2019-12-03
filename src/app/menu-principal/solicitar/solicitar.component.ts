import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';

@Component({
  selector: 'app-solicitar',
  templateUrl: './solicitar.component.html',
  styleUrls: ['./solicitar.component.css']
})
export class SolicitarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitSolicitar() {
    
  }

}

export interface SatDatepickerRangeValue<D> {
  begin: D | null;
  end: D | null;
}
