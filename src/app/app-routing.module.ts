import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './menu-principal/home/home.component';
import {AuthorizatedGuard} from './authorizated.guard';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { LiberarComponent } from './menu-principal/liberar/liberar.component';
import { SolicitarComponent } from './menu-principal/solicitar/solicitar.component';
import { ReportarComponent } from './menu-principal/reportar/reportar.component';
import { PerfilComponent } from './menu-principal/perfil/perfil.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  // { path: '**', redirectTo: '/principal'},
  { path: 'forgot', component: ForgotpassComponent},
  { path: '', component: MenuPrincipalComponent,
  //  canActivate: [AuthorizatedGuard],
    children: [
      { path: 'home', component: HomeComponent, canActivate: [AuthorizatedGuard]},
      { path: 'liberar', component: LiberarComponent},
      { path: 'solicitar', component: SolicitarComponent},
      { path: 'reportar', component: ReportarComponent },
      { path: 'perfil', component: PerfilComponent}
    ]},


];

export const Routing = RouterModule.forRoot(appRoutes);