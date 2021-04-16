import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-client',
  templateUrl: './sidebar-client.component.html',
  styleUrls: ['./sidebar-client.component.css']
})
export class SidebarClientComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();

  itemOfPublication: string = "itemOfPublication";
  itemOfCommand: string = "itemOfCommand";
  itemOfaddDemand: string = "itemOfaddDemand";
  itemOfdemand: string = "itemOfdemand";
  itemOfBill: string = "itemOfBill";
  itemOfReclamation: string = "itemOfReclamation";
  demandState: boolean = false;

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }


}
