import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-navbar-client',
  templateUrl: './navbar-client.component.html',
  styleUrls: ['./navbar-client.component.css']
})
export class NavbarClientComponent implements OnInit {

  @Input() usernameOutput: string = '';
  constructor(private userService: UserService) { }

  user: String = "client";
  ngOnInit(): void {
    this.user = this.usernameOutput;
  }
  take(value: any) {
    console.log(value);
  }

}
