import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';
import { Utilisateur } from '../../model/utilisateur'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {

  public users: Utilisateur | undefined;
  public username: String = '';
  public password: String = '';
  public hide = true;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.userService.findbyNamepwd(this.username, this.password)
      .subscribe(data => {
        console.log(data.role+ " " + data.etat);
        if (data.role == "User" && data.etat == true) {
          this.router.navigate(['client/dashboard', data.username]);
        } else if (data.role == "Admin") {
          this.router.navigate(['dashboard', data.username]);
        } else {
          this.router.navigate(['NotFoundError']);
        }
      },
        (error: HttpErrorResponse) => {
          window.location.reload();
          //alert(error.message);
        }
      )
  }

}
