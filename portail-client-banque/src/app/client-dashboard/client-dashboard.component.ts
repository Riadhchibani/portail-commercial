import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {
  constructor(private routerService: ActivatedRoute) { }

  //public itemTemp: string = 'itemOfClient';
  public usernameValue: string = '';
  public itemTemp: string = 'itemOfClient';

  addItem(newItem: string) {
    this.itemTemp = newItem.toString();
  }

  ngOnInit(): void {
    this.usernameValue = this.routerService.snapshot.params.username;
  }

}
