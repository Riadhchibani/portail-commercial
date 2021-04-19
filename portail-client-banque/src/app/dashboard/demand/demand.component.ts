import { Utilisateur } from './../../model/utilisateur';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Demande } from 'src/app/model/Demande';
import { UserService } from 'src/app/user.service';
import { MatDialog } from '@angular/material/dialog';
import { CommandAlertComponent } from './command-alert/command-alert.component';

@Component({
  selector: 'app-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.css']
})
export class DemandComponent implements OnInit {

  panelOpenState = false;
  admin = new Utilisateur;
  dataSource: Demande[] = [];
  dataSourceInbox: Demande[] = [];

  constructor(public dialog: MatDialog, private userService: UserService, private routerService: ActivatedRoute) { }

  ngOnInit() {
    this.userService.getUserbyUsername(this.routerService.snapshot.params.username).subscribe(
      data => {
        this.admin = data;
        this.getAllDemandsByAdminId(this.admin.id);

      }, (error) => {
        alert(error.message);
      }
    )
    this.getAllDemands();
  }

  getAllDemands() {
    this.userService.findAllDemand().subscribe(
      data => {
        this.dataSource = data;
      }, (error: HttpErrorResponse) => {
        alert(error);
      }
    )
  }

  reponseDemand(productName: any, client: any, element: any) {
    let resultDialog = this.dialog.open(CommandAlertComponent, {
      data: {
        username: this.routerService.snapshot.params.username,
        product: productName,
        Client: client,
        demande :element
      }
    });
    resultDialog.afterClosed().subscribe(
      result => {
        console.log(result);
      }
    )
  }

  getAllDemandsByAdminId(id?: number) {
    this.userService.getDemandsByAdminId(id).subscribe(
      data => {
        this.dataSourceInbox = data;
      }, (error) => {
        alert(error.message);
      }
    )
  }

  addToAdmin(id: any) {
    this.userService.addAdminDemand(id, this.admin).subscribe(
      data => {
        alert("Added");
        this.ngOnInit();
      }, (error) => {
        alert(error.message);
      }
    )
    this.getAllDemandsByAdminId(this.admin.id);
  }

  removeDemand(id: any) {
    this.userService.updateUserDemand(id).subscribe(
      data => {
        this.ngOnInit();
      }, (error) => {
        alert(error.message);
      }
    )
  }


}
