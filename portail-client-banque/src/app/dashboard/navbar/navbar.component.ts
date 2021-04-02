import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() usernameOutput: string = '';

  constructor(private userService: UserService) { }
  
  ngOnInit(): void {
    
  }
  take(value: any) {
    console.log(value);
  }

}
