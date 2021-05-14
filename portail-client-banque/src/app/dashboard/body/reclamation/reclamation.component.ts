import { Utilisateur } from './../../../model/utilisateur';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'src/app/model/Reclamation';
import { UserService } from 'src/app/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {

  panelOpenState = false;
  dataSource: Reclamation[] = [];
  open: boolean = false;
  response: string = '';


  profileFormPub = new FormGroup({
    responseFrom: new FormControl(''),
  });

  constructor(private userService: UserService, private routerService: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllReclamtions();
  }

 

  addResponse(id: any) {
    this.userService.addResponse(id, this.response, this.routerService.snapshot.params.username).subscribe(
      data => {
       alert(data);
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    
  }

  getAllReclamtions() {

    this.userService.getAllReclamation(this.routerService.snapshot.params.username).subscribe(
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
    this.userService.deleteReclamationById(id, this.routerService.snapshot.params.username).subscribe(
      data => {
        alert("Deleted");
        this.ngOnInit();
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
