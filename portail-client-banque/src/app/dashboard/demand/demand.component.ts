import { Utilisateur } from './../../model/utilisateur';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Demande } from 'src/app/model/Demande';
import { UserService } from 'src/app/user.service';
import { MatDialog } from '@angular/material/dialog';
import { CommandAlertComponent } from './command-alert/command-alert.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog, private userService: UserService, private routerService: ActivatedRoute) { }

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
    this.userService.findAllDemand(this.routerService.snapshot.params.username).subscribe(
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
        demande: element
      }
    });
    resultDialog.afterClosed().subscribe(
      result => {
        
      }
    )
  }

  getAllDemandsByAdminId(id?: number) {
    this.userService.getDemandsByAdminId(this.routerService.snapshot.params.username, id).subscribe(
      data => {
        this.dataSourceInbox = data;
      }, (error) => {
        alert(error.message);
      }
    )
  }

  addToAdmin(id: any) {
    this.userService.addAdminDemand(id, this.routerService.snapshot.params.username, this.admin).subscribe(
      data => {
        this._snackBar.open("Ajoutée",'',{
          duration: 1000
        });
        this.ngOnInit();
      }, (error) => {
        alert(error.message);
      }
    )
    this.getAllDemandsByAdminId(this.admin.id);
  }

  removeDemand(id: any) {
    this.userService.updateUserDemand(id, this.routerService.snapshot.params.username).subscribe(
      data => {
        this.ngOnInit();
      }, (error) => {
        alert(error.message);
      }
    )
  }


}
