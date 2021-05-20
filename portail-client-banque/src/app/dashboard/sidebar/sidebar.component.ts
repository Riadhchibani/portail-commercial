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
  itemOfProduction: string = "itemOfProduction";
  itemOfAddProduction: string = "itemOfAddProduction";
  itemOfBill: string = "itemOfBill";
  itemOfReclamation: string = "itemOfReclamation";
  itemOfProduct: string = "itemOfProduct";
  itemOfAddProduct: string = "itemOfAddProduct";
  itemOfDemand: string = "itemOfDemand";
  clientState: boolean = false;
  pubState: boolean = false;
  billState: boolean = false;
  productState: boolean = false;


  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
