import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Demande } from 'src/app/model/Demande';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-demand-client',
  templateUrl: './demand-client.component.html',
  styleUrls: ['./demand-client.component.css']
})
export class DemandClientComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private userService: UserService, private routerService: ActivatedRoute) { }
  dataSource: Demande[] = [];
  panelOpenState = false;

  getAllDemands() {
    this.userService.getDemandsByUsername(this.routerService.snapshot.params.username).subscribe(
      data => {
        this.dataSource = data;
      }, (error: HttpErrorResponse) => {
        alert(error);
      }
    )
  }

  ngOnInit() {
    this.getAllDemands();
  }

  deleteDemand(id: any) {
    this.userService.deleteDemand(id, this.routerService.snapshot.params.username).subscribe(
      data => {
        this._snackBar.open("supprimée", '', {
          duration: 1000
        });
      }, (error: HttpErrorResponse) => {
        alert(error);
      }
    )
    this.ngOnInit();
  }

}
