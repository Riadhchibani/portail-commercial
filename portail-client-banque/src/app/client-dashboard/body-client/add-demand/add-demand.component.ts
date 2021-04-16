import { Utilisateur } from 'src/app/model/utilisateur';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Demande } from 'src/app/model/Demande';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-add-demand',
  templateUrl: './add-demand.component.html',
  styleUrls: ['./add-demand.component.css']
})
export class AddDemandComponent implements OnInit {

  constructor(private routerService: ActivatedRoute, private userService: UserService) { }

  profileForm = new FormGroup({
    nomproduit: new FormControl(''),
    description: new FormControl(''),
  });

  testUser: boolean = false;
  userClient: Utilisateur | undefined;



  addDemand() {
    let demand = new Demande(
      undefined,
      new Date(),
      new Date(),
      "none",
      this.profileForm.value.description,
      this.profileForm.value.nomproduit,
      this.userClient,
      undefined
    );
    if (this.testUser == false) {
      this.userService.addDemandClient(demand).subscribe(
        date => {
          alert("Added");
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      )
    }


  }

  ngOnInit(): void {
    this.userService.getUserbyUsername(this.routerService.snapshot.params.username).subscribe(
      data => {
        this.userClient = data;
      },
      (error: HttpErrorResponse) => {
        this.testUser = true;
        alert(error.message);

      }
    )
  }

}
