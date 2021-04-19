import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AccesGuard implements CanActivate {

  constructor(
    private userService: UserService
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    //localStorage.setItem('key', 'qsdqsdqsdqsdq6s5dqsd65q4sdq6sd6qs45dq6s5d');
    //localStorage.getItem('key'); 
   
    return true;
  }

}
