import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-client',
  templateUrl: './sidebar-client.component.html',
  styleUrls: ['./sidebar-client.component.css']
})
export class SidebarClientComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();

  itemOfPublication: string = "itemOfPublication";
  itemOfAddClient: string = "itemOfAddClient";
  itemOfCharts: string = "itemOfCharts";
  itemOfProduction: string = "itemOfProduction";
  itemOfAddProduction: string = "itemOfAddProduction";
  itemOfBill: string = "itemOfBill";
  itemOfAddBill: string = "itemOfAddBill";
  itemOfReclamation: string = "itemOfReclamation";
  itemOfDemandProduct: string = "itemOfDemandProduct";
  pubState: boolean = false;
  billState: boolean = false;
  commandState: boolean = false;


  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }


}
