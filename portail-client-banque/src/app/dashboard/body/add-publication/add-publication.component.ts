import { Utilisateur } from './../../../model/utilisateur';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Publication } from 'src/app/model/Publication';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.component.html',
  styleUrls: ['./add-publication.component.css']
})
export class AddPublicationComponent implements OnInit {

  user = new Utilisateur();
  today = new Date();


  constructor(private userService: UserService, private routerService: ActivatedRoute) { }

  profileFormPub = new FormGroup({
    title: new FormControl(''),
    date: new FormControl(''),
    lastdate: new FormControl(''),
    description: new FormControl(''),
  });



  startDate = new Date();
  addPublication() {

    let publication = new Publication(
      this.profileFormPub.value.title,
      "none",
      this.profileFormPub.value.date,
      this.profileFormPub.value.lastdate,
      this.profileFormPub.value.description,
      this.user
    );
    this.userService.addPublication(publication).subscribe(
      data => {
        alert("added");
      }, (error) => {
        alert(error.message);
      }
    );


  }


  ngOnInit(): void {
    this.userService.getUserbyUsername(this.routerService.snapshot.params.username).subscribe(
      data => {
        this.user = data;
      }, (error) => {
        alert(error.message);
      }
    )
  }

}
