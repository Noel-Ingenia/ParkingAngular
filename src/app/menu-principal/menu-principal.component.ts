import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';



@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  constructor(private storageService: StorageService,
              public dialog: MatDialog) { }

  ngOnInit() {
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '90%',
      height: '20%',
      data: '¿Quieres cerrar sesion?'
    });
    dialogRef.afterClosed().subscribe( result => {
      if(result){
        console.log('yes clicked');
        this.storageService.logout();
      }
    });
  }


  public logout(): void {
    this.storageService.logout();
   }

}
