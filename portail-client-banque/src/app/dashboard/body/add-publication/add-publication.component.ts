import { Utilisateur } from './../../../model/utilisateur';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Publication } from 'src/app/model/Publication';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { FileImage } from 'src/app/model/FileImage';

@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.component.html',
  styleUrls: ['./add-publication.component.css']
})
export class AddPublicationComponent implements OnInit {

  user = new Utilisateur();
  today = new Date();
  upFile: any;
  selectedFile: File | undefined;




  constructor(private userService: UserService, private routerService: ActivatedRoute) { }

  profileFormPub = new FormGroup({
    title: new FormControl(''),
    date: new FormControl(''),
    lastdate: new FormControl(''),
    description: new FormControl(''),
  });




  startDate = new Date();
  addPublication() {


    this.userService.upload(this.upFile).subscribe(
      data => {

      }, (error) => {
        alert(error.message);
      }
    );



    let publication = new Publication(
      undefined,
      this.profileFormPub.value.title,
      "none",
      this.profileFormPub.value.date,
      this.profileFormPub.value.lastdate,
      this.profileFormPub.value.description,
      this.user,
      this.upFile.name
    );
    this.userService.addPublication(publication).subscribe(
      data => {
        alert("added");
      }, (error) => {
        alert(error.message);
      }

    );

  }

  fileInfos: Observable<any> | undefined;

  public onFileChanged(event: any): any {
    this.upFile = this.selectedFile = event.target.files[0];
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

