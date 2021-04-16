import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccesGuard implements CanActivate {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //console.log(route.params.username);
      //console.log(state);
      //alert(state);
      //route.data.roles[0] = 6;
        // console.log(route.data.roles[0]);
        // console.log(route.data.roles[1]);
        // console.log(route.data.roles[2]);
       
    return true;
  }
  
}
