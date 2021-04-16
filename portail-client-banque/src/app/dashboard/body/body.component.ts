
import { Component, Input, OnChanges} from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnChanges {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];


  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];



 
  @Input() typeOfOutput: string = '';
  @Input() usernameAdmin: string = '';

 
  constructor() {
  }


  items = new Map([
    ['itemOfAddClient', false],
    ['itemOfCharts', false],
    ['itemOfClient', false],
    ['itemOfProduction', false],
    ['itemOfAddProduction', false],
    ['itemOfBill', false],
    ['itemOfAddBill', false],
    ['itemOfReclamation', false],
    ['itemOfProduct', false],
    ['itemOfAddProduct', false],
    ['itemOfDemand', false]
  ]
  );
  ngOnChanges(event: any) {

    for (let item of this.items.keys()) {
      this.items.set(item, false);
      if (event.typeOfOutput.currentValue == item) {
        this.items.set(item, true);
      }
    }
  }

  
}

