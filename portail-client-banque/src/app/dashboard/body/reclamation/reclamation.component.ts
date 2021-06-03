import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'src/app/model/Reclamation';
import { UserService } from 'src/app/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private _snackBar: MatSnackBar, private userService: UserService, private routerService: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllReclamtions();
  }

 

  addResponse(id: any) {
    this.userService.addResponse(id, this.response, this.routerService.snapshot.params.username).subscribe(
      data => {
        this._snackBar.open("Ajoutée",'',{
          duration: 1000
        });
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

 
}
