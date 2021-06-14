import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
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

  dataSource = new MatTableDataSource<any>();

  @Input() usernameAdminTable: string = '';

  displayedColumns: string[] = ['id', 'nom', 'prenom', 'email', 'age', 'date', 'tel', 'username', 'password', 'code', 'role', 'etat', 'edit'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog, private routerService: ActivatedRoute, private userService: UserService) { }

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
          this.userService.deleteById(id, this.routerService.snapshot.params.username).subscribe(
            data => {
              this.getUsers();
              this._snackBar.open("supprimée",'',{
                duration: 1000
              });
            },
            (error: HttpErrorResponse) => {
              this._snackBar.open("tu ne peux pas le supprimer",'',{
                duration: 1000
              });
            }
          )
        },
        (error: HttpErrorResponse) => {
          window.location.reload();
        }
      )
  }

  getUsers() {
    this.userService.findAll(this.routerService.snapshot.params.username).subscribe(
      data => {
        this.dataSource = new MatTableDataSource<any>(data);
        this.dataSource.paginator = this.paginator;
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
          this.userService.changeStateOfClient(idClient, event.checked, this.routerService.snapshot.params.username).subscribe(
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
