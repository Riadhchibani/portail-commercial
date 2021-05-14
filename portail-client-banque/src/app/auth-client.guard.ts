import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Utilisateur } from './model/utilisateur';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthClientGuard implements CanActivate {
  userClient = new Utilisateur();
  constructor(
    private userService: UserService,
    private routerService: ActivatedRoute,
    private router: Router
  ) {
    //console.log(this.routerService.getCurrentNavigation().extras.state)

  }



  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    if (localStorage.getItem(route.params.username) == null) {
      this.router.navigate(['Login']);
    }
    this.userClient = await this.userService.getUserbyUsername(route.params.username).toPromise();

    console.log(this.userClient.role?.roles);
    return (this.userClient.role?.roles == "Client" ? true : this.router.navigate(['Login']));
  }

}
