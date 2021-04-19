import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Reclamation } from 'src/app/model/Reclamation';
import { Utilisateur } from 'src/app/model/utilisateur';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-reclamation-client',
  templateUrl: './reclamation-client.component.html',
  styleUrls: ['./reclamation-client.component.css']
})
export class ReclamationClientComponent implements OnInit {


  panelOpenState = false;
  dataSource: Reclamation[] = [];
  open: boolean = false;

  constructor(private userService: UserService, private routerService: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllReclamtions();
  }

  getAllReclamtions() {

    this.userService.getReclamationsByUsername(this.routerService.snapshot.params.username).subscribe(
      data => {
        this.dataSource = data;
        if (this.dataSource.length == 1 || this.dataSource.length == 2) {
          this.open = true;
        }
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )

  }

  deleteReclamation(id: any) {
    this.userService.deleteReclamationById(id).subscribe(
      data => {
        alert("Deleted");
        this.ngOnInit();
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
