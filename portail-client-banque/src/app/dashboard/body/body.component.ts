import { Utilisateur } from './../../model/utilisateur';
import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserService } from 'src/app/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

/** Error when invalid control is dirty, touched, or submitted. */


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnChanges {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public users: Utilisateur[] = [];

  displayedColumns: string[] = ['id', 'nom', 'prenom', 'email', 'age', 'date', 'tel', 'username', 'password', 'role', 'etat', 'edit'];



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
  itemOfProduct: boolean = false;
  itemOfAddProduct: boolean = false;
  itemOfDemand: boolean = false;
  public ageValue: number = 0;
  //-------------------------------------------------------------------------------------------------------------------
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];


  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  //----------------------------------------------------------------------------------------------------------------------


  dataSource: Utilisateur[] = [];
  constructor(private userService: UserService) {
  }
  deleteUser(id: number) {
    this.userService.deleteById(id).subscribe(
      data => {
        console.log(data);
        this.getUsers();
      },
      (error: HttpErrorResponse) => {
        //window.location.reload();
        alert(error.message);
      }
    )
  }

  getUsers() {
    this.userService.findAll().subscribe(
      data => {
        this.dataSource = data;
      }
    )
  }

  public mymodel: any;

  public mychange(event: MatSlideToggleChange, idClient: number) {
    console.log(idClient);
    console.log(event.checked);
    this.userService.changeStateOfClient(idClient, event.checked).subscribe(
      data => {
        console.log(data);
      }
    )
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
      this.itemOfProduct = false;
      this.itemOfAddProduct = false;
      this.itemOfDemand = false;

    } else if (this.typeOfOutput == 'itemOfCharts') {
      this.itemOfAddClient = false;
      this.itemOfCharts = true;
      this.itemOfClient = false;
      this.itemOfProduction = false;
      this.itemOfAddProduction = false;
      this.itemOfBill = false;
      this.itemOfAddBill = false;
      this.itemOfReclamation = false;
      this.itemOfProduct = false;
      this.itemOfAddProduct = false;
      this.itemOfDemand = false;
    } else if (this.typeOfOutput == 'itemOfClient') {
      this.itemOfAddClient = false;
      this.itemOfCharts = false;
      this.itemOfClient = true;
      this.itemOfProduction = false;
      this.itemOfAddProduction = false;
      this.itemOfBill = false;
      this.itemOfAddBill = false;
      this.itemOfReclamation = false;
      this.itemOfProduct = false;
      this.itemOfAddProduct = false;
      this.itemOfDemand = false;
      this.getUsers();
    } else if (this.typeOfOutput == 'itemOfProduction') {
      this.itemOfAddClient = false;
      this.itemOfCharts = false;
      this.itemOfClient = false;
      this.itemOfProduction = true;
      this.itemOfAddProduction = false;
      this.itemOfBill = false;
      this.itemOfAddBill = false;
      this.itemOfReclamation = false;
      this.itemOfProduct = false;
      this.itemOfAddProduct = false;
      this.itemOfDemand = false;

    } else if (this.typeOfOutput == 'itemOfAddProduction') {
      this.itemOfAddClient = false;
      this.itemOfCharts = false;
      this.itemOfClient = false;
      this.itemOfProduction = false;
      this.itemOfAddProduction = true;
      this.itemOfBill = false;
      this.itemOfAddBill = false;
      this.itemOfReclamation = false;
      this.itemOfProduct = false;
      this.itemOfAddProduct = false;
      this.itemOfDemand = false;

    } else if (this.typeOfOutput == 'itemOfBill') {
      this.itemOfAddClient = false;
      this.itemOfCharts = false;
      this.itemOfClient = false;
      this.itemOfProduction = false;
      this.itemOfAddProduction = false;
      this.itemOfBill = true;
      this.itemOfAddBill = false;
      this.itemOfReclamation = false;
      this.itemOfProduct = false;
      this.itemOfAddProduct = false;
      this.itemOfDemand = false;

    } else if (this.typeOfOutput == 'itemOfAddBill') {
      this.itemOfAddClient = false;
      this.itemOfCharts = false;
      this.itemOfClient = false;
      this.itemOfProduction = false;
      this.itemOfAddProduction = false;
      this.itemOfBill = false;
      this.itemOfAddBill = true;
      this.itemOfReclamation = false;
      this.itemOfProduct = false;
      this.itemOfAddProduct = false;
      this.itemOfDemand = false;

    } else if (this.typeOfOutput == 'itemOfReclamation') {
      this.itemOfAddClient = false;
      this.itemOfCharts = false;
      this.itemOfClient = false;
      this.itemOfProduction = false;
      this.itemOfAddProduction = false;
      this.itemOfBill = false;
      this.itemOfAddBill = false;
      this.itemOfReclamation = true;
      this.itemOfProduct = false;
      this.itemOfAddProduct = false;
      this.itemOfDemand = false;

    } else if (this.typeOfOutput == 'itemOfProduct') {
      this.itemOfAddClient = false;
      this.itemOfCharts = false;
      this.itemOfClient = false;
      this.itemOfProduction = false;
      this.itemOfAddProduction = false;
      this.itemOfBill = false;
      this.itemOfAddBill = false;
      this.itemOfReclamation = false;
      this.itemOfProduct = true;
      this.itemOfAddProduct = false;
      this.itemOfDemand = false;

    } else if (this.typeOfOutput == 'itemOfAddProduct') {
      this.itemOfAddClient = false;
      this.itemOfCharts = false;
      this.itemOfClient = false;
      this.itemOfProduction = false;
      this.itemOfAddProduction = false;
      this.itemOfBill = false;
      this.itemOfAddBill = false;
      this.itemOfReclamation = false;
      this.itemOfProduct = false;
      this.itemOfAddProduct = true;
      this.itemOfDemand = false;
    } else if (this.typeOfOutput == 'itemOfDemand') {
      this.itemOfAddClient = false;
      this.itemOfCharts = false;
      this.itemOfClient = false;
      this.itemOfProduction = false;
      this.itemOfAddProduction = false;
      this.itemOfBill = false;
      this.itemOfAddBill = false;
      this.itemOfReclamation = false;
      this.itemOfProduct = false;
      this.itemOfAddProduct = false;
      this.itemOfDemand = false;
      this.itemOfDemand = true;
    }

  }
}

