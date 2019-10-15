import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


import * as fromAuth from '../store/auth';
import { AuthService } from '@app/features/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor( private authService : AuthService) { }

  canActivate(route: ActivatedRouteSnapshot , state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{

    return this.authService.getAuthStatus();


  }
}
