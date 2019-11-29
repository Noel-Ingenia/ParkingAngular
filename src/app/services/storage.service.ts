import { Injectable } from '@angular/core';
import { Session } from '../models/Session';
import { Router } from '@angular/router';
import { Users } from '../models/Users';
import * as jwt_decode from 'jwt-decode';
import { ControlContainer } from '@angular/forms';

@Injectable()
export class StorageService {

 private localStorageService;
 private currentSession: Session = null;

  constructor(private router: Router) {
    this.localStorageService = localStorage;
    this.currentSession = this.loadSessionData();
   }

   setCurrentSession(session: Session): void {
    this.currentSession = session;
    this.localStorageService.setItem('currentUser', JSON.stringify(session));
   }


   loadSessionData(): Session {
    const sessionStr = this.localStorageService.getItem('currentUser');
    return (sessionStr) ? JSON.parse(sessionStr) as Session : null;
    }

    getCurrentSession(): Session {
      return this.currentSession;
    }
    removeCurrentSession(): void {
      this.localStorageService.removeItem('currentUser');
      this.currentSession = null;
    }
    getCurrentUser(): Session {
      const session: Session = this.getCurrentSession();
      return (session);
    }
    isAuthenticated(): boolean {
      return (this.getCurrentToken() != null) ? true : false;
    }
    getCurrentToken(): Session {

      const session = this.getCurrentSession();
      return (session);
    }
    logout(): void {
      this.removeCurrentSession();
      this.router.navigate(['/login']);
    }

}
