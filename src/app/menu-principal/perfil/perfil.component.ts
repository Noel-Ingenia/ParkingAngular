import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/Users';
import { StorageService } from 'src/app/services/storage.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public user: Users;
  constructor(
    private storageService: StorageService,
    private authenticationService: AuthenticationService
  ) { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    //this.user = this.storageService.getCurrentUser();
  }
}
