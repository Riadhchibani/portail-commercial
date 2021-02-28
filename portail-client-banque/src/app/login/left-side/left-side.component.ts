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
  private test: any;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.userService.login(this.username, this.password)
      .subscribe(data => {
        this.router.navigate(["dashboard"]);
      },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      )
  }
  ontapusername() {
    console.log(this.password);
  }
  ontappwd(value: any) {
    this.password = value;
    console.log(value);
  }

  hide = true;

 
}
