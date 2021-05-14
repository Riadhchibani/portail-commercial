import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-navbar-client',
  templateUrl: './navbar-client.component.html',
  styleUrls: ['./navbar-client.component.css']
})
export class NavbarClientComponent implements OnInit {

  @Input() usernameOutput: string = '';
  constructor(private userService: UserService, private routerService: ActivatedRoute, private router: Router) { }

  user: String = "client";
  ngOnInit(): void {
    this.user = this.usernameOutput;
  }
  take() {
    localStorage.removeItem(this.routerService.snapshot.params.username);
    this.router.navigate(['Login']);
  }

}
