import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es'; /** PARA FECHAS DE LIBERAR Y SOLICITAR (LISTADO) */
registerLocaleData(localeEs, 'es'); /** PARA FECHAS DE LIBERAR Y SOLICITAR (LISTADO) */
import { Routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatCardModule,
        MatDialogModule, MatTableModule, MatProgressSpinnerModule, MatToolbarModule, MatSidenavModule,
        MatListModule, MatNativeDateModule, MatDividerModule } from '@angular/material';
import { HomeComponent } from './menu-principal/home/home.component';
import { AuthorizatedGuard} from './authorizated.guard';
import { StorageService} from './services/storage.service';
import { MatChipsModule} from '@angular/material/chips';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { LiberarComponent } from './menu-principal/liberar/liberar.component';
import { SolicitarComponent } from './menu-principal/solicitar/solicitar.component';
import { ReportarComponent } from './menu-principal/reportar/reportar.component';
import { PerfilComponent } from './menu-principal/perfil/perfil.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, SatDatepickerModule } from 'saturn-datepicker';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DialogComponent } from './menu-principal/dialog/dialog.component';
import { registerLocaleData } from '@angular/common';

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
    MenuPrincipalComponent,
    DialogComponent
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
    MatChipsModule, MatNativeDateModule, MatDividerModule,
    SatDatepickerModule
  ],
  entryComponents: [
    DialogComponent
  ],

  providers: [AuthorizatedGuard, StorageService,
    {provide: LOCALE_ID, useValue: 'es'}, /** PARA FECHAS DE LIBERAR Y SOLICITAR (LISTADO) */
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
