import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';
import { Utilisateur } from '../../model/utilisateur'
import { HttpErrorResponse } from '@angular/common/http';
import { Role } from 'src/app/model/Role';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {

  public user = new Utilisateur();
  public username: String = '';
  public password: String = '';
  public hide = true;
  public role: Role | undefined;

  constructor(private router: Router, private userService: UserService, private routerService: ActivatedRoute ) { }

  ngOnInit(): void {
    console.log("-------------------------------------");
    console.log(this.routerService.data);
    console.log("-------------------------------------");

  }

  onSubmit() {
    this.userService.findbyNamepwd(this.username, this.password)
      .subscribe(data => {
        if (data.role?.roles == "Client" && data.etat == true) {
          this.router.navigate(['client/dashboard', data.username]);
        } else if (data.role?.roles == "Admin") {
          this.router.navigate(['dashboard', data.username]);
        } else {
          this.router.navigate(['NotFoundError']);
        }
      },
        (error: HttpErrorResponse) => {
          //alert(error.message);
          window.location.reload();
        }
      )
  }

}
