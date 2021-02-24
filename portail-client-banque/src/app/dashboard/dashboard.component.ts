import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  public itemTemp: string = 'itemOfClient';

  addItem(newItem: string) {
    this.itemTemp = newItem.toString();
  }

  ngOnInit(): void { }

}
