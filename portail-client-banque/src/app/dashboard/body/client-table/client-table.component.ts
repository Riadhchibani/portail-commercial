import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ActivatedRoute } from '@angular/router';
import { Utilisateur } from 'src/app/model/utilisateur';
import { UserService } from 'src/app/user.service';
import { PasswordDialogComponent } from '../../edit-user/password-dialog/password-dialog.component';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css']
})
export class ClientTableComponent implements OnInit {

  dataSource: Utilisateur[] = [];

  @Input() usernameAdminTable: string = '';

  displayedColumns: string[] = ['id', 'nom', 'prenom', 'email', 'age', 'date', 'tel', 'username', 'password', 'code', 'role', 'etat', 'edit'];


  constructor(public dialog: MatDialog, private routerService: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  deleteUser(id: number) {
    let resultDialog = this.dialog.open(PasswordDialogComponent);
    resultDialog.afterClosed().subscribe(
      result => {
        this.verifUsernamePwd(this.routerService.snapshot.params.username, result, id);
      }
    )

  }

  verifUsernamePwd(username: string, password: string, id: number) {
    this.userService.findbyNamepwd(username, password)
      .subscribe(
        data => {
          this.userService.deleteById(id).subscribe(
            data => {
              this.getUsers();
            },
            (error: HttpErrorResponse) => {
              alert(error.message);
            }
          )
        },
        (error: HttpErrorResponse) => {
          window.location.reload();
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


  change(event: MatSlideToggleChange, idClient: number) {
    let resultDialog = this.dialog.open(PasswordDialogComponent);
    resultDialog.afterClosed().subscribe(
      result => {
        this.verifUserChecked(this.routerService.snapshot.params.username, result, event, idClient);
      }
    )


  }

  verifUserChecked(username: string, password: string, event: MatSlideToggleChange, idClient: number) {
    this.userService.findbyNamepwd(username, password)
      .subscribe(
        data => {
          this.userService.changeStateOfClient(idClient, event.checked).subscribe(
            data => {
            },
            (error: HttpErrorResponse) => {
              alert(error.message);
            }
          )
        },
        (error: HttpErrorResponse) => {
          window.location.reload();
        }
      )
  }

}
