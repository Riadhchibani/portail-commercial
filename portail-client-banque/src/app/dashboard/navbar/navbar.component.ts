import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() usernameOutput: string = '';

  constructor(private userService: UserService, private routerService: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

  }
  take() {
    localStorage.removeItem(this.routerService.snapshot.params.username);
    this.router.navigate(['Login']);
  }

}
