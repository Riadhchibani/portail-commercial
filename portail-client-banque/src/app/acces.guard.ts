import { Utilisateur } from './model/utilisateur';
import { Injectable, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { LeftSideComponent } from './login/left-side/left-side.component';

@Injectable({
  providedIn: 'root'
})
export class AccesGuard implements CanActivate {

  AdminUser = new Utilisateur();
  constructor(
    private userService: UserService,
    private routerService: ActivatedRoute,
    private router: Router
  ) { }



  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {

    if (localStorage.getItem(route.params.username) == null) {
      this.router.navigate(['Login']);
    }
    this.AdminUser = await this.userService.getUserbyUsername(route.params.username).toPromise();
    return (this.AdminUser.role?.roles == "Admin" ? true : this.router.navigate(['Login']));
  }


}
