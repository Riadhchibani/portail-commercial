import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Publication } from 'src/app/model/Publication';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})



export class PublicationComponent implements OnInit {

  dataSource: Publication[] = [];
  urlImage: any;


  constructor(private _snackBar: MatSnackBar,private userService: UserService, private routerService: ActivatedRoute) { }

  ngOnInit(): void {
    this.getpublicatioin();
    this.urlImage = `http://localhost:8083/files/`;

  }

  a: Date | undefined;

  getpublicatioin() {
    this.userService.getAllPublication(this.routerService.snapshot.params.username).subscribe(
      data => {
        this.dataSource = data;
      }
    )
  }

  deletePub(id: any, imageName: any) {
    this.userService.deletePubById(id, this.routerService.snapshot.params.username).subscribe(
      data => {
        this._snackBar.open("supprimée",'',{
          duration: 1000
        });

        this.ngOnInit();

      }
    ), (error: HttpErrorResponse) => {
      window.location.reload();
    }
    this.userService.deleteImage(imageName, this.routerService.snapshot.params.username).subscribe(
      data => {

      }, (error) => {
        alert(error);
      }
    );
  }

}
