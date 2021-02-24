import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }
  hide = true;

  nav() {
    this.router.navigate(["dashboard"]);

  }
}
