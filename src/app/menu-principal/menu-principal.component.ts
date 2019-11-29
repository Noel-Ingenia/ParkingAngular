import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';



@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  constructor(private storageService: StorageService) { }

  ngOnInit() {
  }

  public logout(): void {
    this.storageService.logout();
  }

}
