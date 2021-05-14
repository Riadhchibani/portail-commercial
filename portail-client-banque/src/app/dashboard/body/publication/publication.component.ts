import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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


  constructor(private userService: UserService, private routerService: ActivatedRoute) { }

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
        alert("Deleted");
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

  testDate(date: any): boolean {

    let a = new Date(date);
    if (date <= a.getFullYear) {
      console.log(a.getFullYear);
      console.log(a.getMonth);
      console.log(a.getDay);
      console.log(date);
      return true;
    }
    console.log(a.getFullYear);
    console.log(a.getMonth);
    console.log(a.getDay);
    console.log(date);
    return false;
  }


}
