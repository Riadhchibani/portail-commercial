import { Utilisateur } from './../../../model/utilisateur';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'src/app/model/Reclamation';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {

  panelOpenState = false;
  dataSource: Reclamation[] = [];
  userClient: string | undefined;
  open: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllReclamtions();
  }

  getClient() {
    this.dataSource.forEach(element => {
      this.userClient = element.utilisateur?.username;
    });
  }

  getAllReclamtions() {

    this.userService.getAllReclamation().subscribe(
      data => {
        this.dataSource = data;
        this.getClient();
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
