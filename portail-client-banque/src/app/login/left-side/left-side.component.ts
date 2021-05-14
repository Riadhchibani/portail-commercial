import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';
import { Utilisateur } from '../../model/utilisateur'
import { HttpErrorResponse } from '@angular/common/http';
import { Role } from 'src/app/model/Role';
import { AuthRequest } from 'src/app/model/AuthRequest';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})

export class LeftSideComponent implements OnInit {

  public user = new Utilisateur();
  public username: string = '';
  public password: string = '';
  public hide = true;
  public role: Role | undefined;

  constructor(private router: Router, private userService: UserService, private routerService: ActivatedRoute) { }

  ngOnInit(): void { }

  onSubmit() {
    let authRequest = new AuthRequest(this.username, this.password);
    this.userService.generateToken(authRequest).subscribe(
      dataToken => {
        localStorage.setItem(this.username, dataToken);
        this.userService.findbyNamepwd(this.username, this.password)
          .subscribe(data1 => {
            this.user = data1;
            if (data1.role?.roles == "Client" && data1.etat == true) {
              this.router.navigate(['client/dashboard', data1.username]);
            } else if (data1.role?.roles == "Admin") {
              this.router.navigate(['admin/dashboard', data1.username]);
            } else {
              this.router.navigate(['NotFoundError']);
            }
          },
            (error: HttpErrorResponse) => {
              alert(error.message);
              //window.location.reload();
            }
          )
      }
    );


  }

}
