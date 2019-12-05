/*import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Users} from '../models/Users';
import { FormControl, Validators, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  router: any;
  constructor(private loginService: LoginService) { }
  hide = true;
  public myToken;

  ngOnInit() {
    this.loginService.login('noeltrader@gmail.com', 'prueba').subscribe(
      res => {console.log(res);

      });
  }
}*/
import {Component, OnInit} from '@angular/core';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';
import {LoginObjects} from '../models/LoginObject';
import {AuthenticationService} from '../services/authentication.service';
import {StorageService} from '../services/storage.service';
import {Router} from '@angular/router';
import {Session} from '../models/Session';
import {ReactiveFormsModule} from '@angular/forms';
import {Md5} from 'ts-md5/dist/md5';
import * as jwt_decode from 'jwt-decode';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm: FormGroup;
  public mensaje;
  // tslint:disable-next-line:no-inferrable-types
  public submitted: boolean = false;
  public error: {code: number, message: string} = null;
  
  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private storageService: StorageService,
              private router: Router) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      UserName: ['', Validators.required],
      UserPassword: ['', Validators.required]
    });
  }
  public submitLogin(): void {
    this.submitted = true;
    this.error = null;
    if (this.loginForm.valid) {
      //// encriptado de password///
      const md5 = new Md5();
      const encript = md5.appendStr(this.loginForm.value.UserPassword).end();
      this.loginForm.value.UserPassword = encript;
      //// fin encriptado////

      this.authenticationService.login(new LoginObjects(this.loginForm.value)).subscribe(
        data => {
          if (!data.message) {

          this.correctLogin(data);
          console.log(data);

        } else {
          console.log(data.message);
          this.mensaje = data.message;
        }
        },
        error => { this.error = JSON.parse(error._body);
                   console.log(error);
        }

      );
    }
  }
  private correctLogin(data: Session) {
    this.storageService.setCurrentSession(data);
    this.router.navigate(['/home']);
  }
}
