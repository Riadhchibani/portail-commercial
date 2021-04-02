import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private routerService: ActivatedRoute) { }

  public itemTemp: string = 'itemOfClient';
  public usernameValue: string = '';

  addItem(newItem: string) {
    this.itemTemp = newItem.toString();
  }

  ngOnInit(): void {
    //this.usernameOfUser = this.routerService.snapshot.params.user;
    this.usernameValue = this.routerService.snapshot.params.username
  }

}
