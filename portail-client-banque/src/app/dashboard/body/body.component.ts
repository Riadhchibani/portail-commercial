import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnChanges {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  hide = true;
  @Input() typeOfOutput: string = '';
  itemOfAddClient: boolean = false;
  itemOfCharts: boolean = false;
  itemOfClient: boolean = false;
  public ageValue: number = 0;

  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  constructor() {
  }

  ngOnChanges() {
    if (this.typeOfOutput == 'itemOfAddClient') {
      this.itemOfAddClient = true;
      this.itemOfCharts = false;
      this.itemOfClient = false;
    } else if (this.typeOfOutput == 'itemOfCharts') {
      this.itemOfAddClient = false;
      this.itemOfCharts = true;
      this.itemOfClient = false;
    } else if (this.typeOfOutput == 'itemOfClient') {
      this.itemOfAddClient = false;
      this.itemOfCharts = false;
      this.itemOfClient = true;
    }

  }

}
