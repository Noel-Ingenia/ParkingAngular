import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatCardModule,
        MatDialogModule, MatTableModule, MatProgressSpinnerModule, MatToolbarModule, MatSidenavModule,
        MatListModule, MatNativeDateModule, MatDividerModule  } from '@angular/material';
import { HomeComponent } from './menu-principal/home/home.component';
import { AuthorizatedGuard} from './authorizated.guard';
import {StorageService} from './services/storage.service';
import { MatChipsModule} from '@angular/material/chips';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { LiberarComponent } from './menu-principal/liberar/liberar.component';
import { SolicitarComponent } from './menu-principal/solicitar/solicitar.component';
import { ReportarComponent } from './menu-principal/reportar/reportar.component';
import { PerfilComponent } from './menu-principal/perfil/perfil.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ForgotpassComponent,
    LiberarComponent,
    SolicitarComponent,
    ReportarComponent,
    PerfilComponent,
    MenuPrincipalComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule, MatProgressSpinnerModule, MatToolbarModule, MatSidenavModule,
    MatIconModule, MatCardModule, MatDialogModule, MatTableModule, MatListModule,
    MatChipsModule, MatNativeDateModule, MatDividerModule


  ],
  providers: [AuthorizatedGuard, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
