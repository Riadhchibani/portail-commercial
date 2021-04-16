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

  userClient: Utilisateur | undefined;

  constructor(private routerService: ActivatedRoute, private userService: UserService) { }

  profileForm = new FormGroup({
    title_reclamation: new FormControl(''),
    description: new FormControl(''),
    etat_reclamation: new FormControl(''),
    date_create: new FormControl(''),
  });

  ngOnInit(): void {
    this.userService.getUserbyUsername(this.routerService.snapshot.params.username).subscribe(
      data => {
        this.userClient = data;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  addReclamationClient() {
    let reclamation = new Reclamation(
      undefined,
      this.profileForm.value.title_reclamation,
      this.profileForm.value.description,
      "none",
      new Date(),
      this.userClient
    );
    this.userService.addReclamation(reclamation).subscribe(
      data => {
        alert("Added");
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
