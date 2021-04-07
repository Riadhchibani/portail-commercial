import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Utilisateur } from 'src/app/model/utilisateur';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css']
})
export class ClientTableComponent implements OnInit {

  dataSource: Utilisateur[] = [];
  
  @Input() usernameAdminTable: string = '';

  displayedColumns: string[] = ['id', 'nom', 'prenom', 'email', 'age', 'date', 'tel', 'username', 'password', 'role', 'etat', 'edit'];


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  deleteUser(id: number) {
    this.userService.deleteById(id).subscribe(
      data => {
        this.getUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  getUsers() {
    this.userService.findAll().subscribe(
      data => {
        this.dataSource = data;
        console.log(data);
        console.log(data[0].role);
      }
    )
  }


  mychange(event: MatSlideToggleChange, idClient: number) {
    this.userService.changeStateOfClient(idClient, event.checked).subscribe(
      data => {
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
