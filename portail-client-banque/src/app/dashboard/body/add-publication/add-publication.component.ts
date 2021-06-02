import { Utilisateur } from './../../../model/utilisateur';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Publication } from 'src/app/model/Publication';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { FileImage } from 'src/app/model/FileImage';
import { HttpErrorResponse } from '@angular/common/http';
import { DataResponse } from 'src/app/model/DataResponse';

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


    this.userService.upload(this.upFile, this.routerService.snapshot.params.username).subscribe(
      data => {

      }, (error) => {
        alert(error.message);
      }
    );



    let publication = new Publication(
      undefined,
      this.nomduPro,
      "none",
      this.profileFormPub.value.date,
      this.profileFormPub.value.lastdate,
      this.profileFormPub.value.description,
      this.user,
      this.upFile.name
    );
    this.userService.addPublication(publication, this.routerService.snapshot.params.username).subscribe(
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

  objs: any[] | undefined;
  valueOf: any;
  onSelect(a: any) {
    this.valueOf = a;
  }

  getData() {
    this.userService.getSousFamille(this.routerService.snapshot.params.username).subscribe(
      data => {
        this.objs = data;
        this.objs.push("...");
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  ngOnInit(): void {
    this.getData();

    this.userService.getUserbyUsername(this.routerService.snapshot.params.username).subscribe(
      data => {
        this.user = data;
      }, (error) => {
        alert(error.message);
      }
    )

  }

  dataObj: any[] = [];
  testProd: boolean = false;

  onclick(productName: any, peo: any) {
    let res = new DataResponse(this.valueOf, productName, peo);
    console.log(res);
    this.userService.getDataArticle(this.routerService.snapshot.params.username, res).subscribe(
      data => {
        this.dataObj = data;
        this.testProd = true;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  selectedValue: string | undefined;
  nomduPro: any | undefined;

  pickOb(a: any) {
    this.nomduPro = a;
  }


}

