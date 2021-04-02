import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-client',
  templateUrl: './body-client.component.html',
  styleUrls: ['./body-client.component.css']
})
export class BodyClientComponent implements OnInit {

  @Input() typeOfOutput: string = '';
  @Input() usernameAdmin: string = '';
  itemOfAddClient: boolean = false;
  itemOfCharts: boolean = false;
  itemOfClient: boolean = false;
  itemOfProduction: boolean = false;
  itemOfAddProduction: boolean = false;
  itemOfBill: boolean = false;
  itemOfAddBill: boolean = false;
  itemOfReclamation: boolean = false;
  itemOfDemandProduct: boolean = false;
  public ageValue: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.typeOfOutput == 'itemOfAddClient') {
      this.itemOfAddClient = true;
      this.itemOfCharts = false;
      this.itemOfClient = false;
      this.itemOfProduction = false;
      this.itemOfAddProduction = false;
      this.itemOfBill = false;
      this.itemOfAddBill = false;
      this.itemOfReclamation = false;
      this.itemOfDemandProduct = false;
    } else if (this.typeOfOutput == 'itemOfCharts') {
      this.itemOfAddClient = false;
      this.itemOfCharts = true;
      this.itemOfClient = false;
      this.itemOfProduction = false;
      this.itemOfAddProduction = false;
      this.itemOfBill = false;
      this.itemOfAddBill = false;
      this.itemOfReclamation = false;
      this.itemOfDemandProduct = false;
    } else if (this.typeOfOutput == 'itemOfClient') {
      this.itemOfAddClient = false;
      this.itemOfCharts = false;
      this.itemOfClient = true;
      this.itemOfProduction = false;
      this.itemOfAddProduction = false;
      this.itemOfBill = false;
      this.itemOfAddBill = false;
      this.itemOfReclamation = false;
      this.itemOfDemandProduct = false;
    } else if (this.typeOfOutput == 'itemOfProduction') {
      this.itemOfAddClient = false;
      this.itemOfCharts = false;
      this.itemOfClient = false;
      this.itemOfProduction = true;
      this.itemOfAddProduction = false;
      this.itemOfBill = false;
      this.itemOfAddBill = false;
      this.itemOfReclamation = false;
      this.itemOfDemandProduct = false;

    } else if (this.typeOfOutput == 'itemOfAddProduction') {
      this.itemOfAddClient = false;
      this.itemOfCharts = false;
      this.itemOfClient = false;
      this.itemOfProduction = false;
      this.itemOfAddProduction = true;
      this.itemOfBill = false;
      this.itemOfAddBill = false;
      this.itemOfReclamation = false;
      this.itemOfDemandProduct = false;

    } else if (this.typeOfOutput == 'itemOfBill') {
      this.itemOfAddClient = false;
      this.itemOfCharts = false;
      this.itemOfClient = false;
      this.itemOfProduction = false;
      this.itemOfAddProduction = false;
      this.itemOfBill = true;
      this.itemOfAddBill = false;
      this.itemOfReclamation = false;
      this.itemOfDemandProduct = false;

    } else if (this.typeOfOutput == 'itemOfAddBill') {
      this.itemOfAddClient = false;
      this.itemOfCharts = false;
      this.itemOfClient = false;
      this.itemOfProduction = false;
      this.itemOfAddProduction = false;
      this.itemOfBill = false;
      this.itemOfAddBill = true;
      this.itemOfReclamation = false;
      this.itemOfDemandProduct = false;

    } else if (this.typeOfOutput == 'itemOfReclamation') {
      this.itemOfAddClient = false;
      this.itemOfCharts = false;
      this.itemOfClient = false;
      this.itemOfProduction = false;
      this.itemOfAddProduction = false;
      this.itemOfBill = false;
      this.itemOfAddBill = false;
      this.itemOfReclamation = true;
      this.itemOfDemandProduct = false;
    } else if (this.typeOfOutput == 'itemOfDemandProduct') {
      console.log("qsdqsd");
      this.itemOfAddClient = false;
      this.itemOfCharts = false;
      this.itemOfClient = false;
      this.itemOfProduction = false;
      this.itemOfAddProduction = false;
      this.itemOfBill = false;
      this.itemOfAddBill = false;
      this.itemOfReclamation = false;
      this.itemOfDemandProduct = true;
    }

  }
}
