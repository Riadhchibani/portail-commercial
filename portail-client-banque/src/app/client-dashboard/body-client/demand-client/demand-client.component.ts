import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Demande } from 'src/app/model/Demande';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-demand-client',
  templateUrl: './demand-client.component.html',
  styleUrls: ['./demand-client.component.css']
})
export class DemandClientComponent implements OnInit {

  constructor(private userService: UserService, private routerService: ActivatedRoute) { }
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
    this.userService.deleteDemand(id).subscribe(
      data => {
        alert("Deleted");
      }, (error: HttpErrorResponse) => {
        alert(error);
      }
    )
    this.ngOnInit();
  }

}
