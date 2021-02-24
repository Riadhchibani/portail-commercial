import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();

  itemOfClient: string = "itemOfClient";
  itemOfAddClient: string = "itemOfAddClient";
  itemOfCharts: string = "itemOfCharts";
  

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
