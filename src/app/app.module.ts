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
        MatDialogModule, MatTableModule, MatProgressSpinnerModule  } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { AuthorizatedGuard} from './authorizated.guard';
import {StorageService} from './services/storage.service';
import { MatChipsModule} from '@angular/material/chips';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ForgotpassComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule, MatProgressSpinnerModule,
    MatIconModule, MatCardModule, MatDialogModule, MatTableModule,
    MatChipsModule


  ],
  providers: [AuthorizatedGuard, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
