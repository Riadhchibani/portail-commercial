import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataResponse } from 'src/app/model/DataResponse';
import { ImArticle } from './../../../model/ImFamilles';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-product-client',
  templateUrl: './product-client.component.html',
  styleUrls: ['./product-client.component.css']
})
export class ProductClientComponent implements OnInit {

  dataSource: ImArticle[] = [];

  displayedColumns: string[] = ['id', 'libelle'];


  constructor(private routerService: ActivatedRoute, private userService: UserService) { }

  objs: any[] | undefined;

  profileForm = new FormGroup({
    codea: new FormControl(''),
  });
  selectedValue: string | undefined;

  ngOnInit(): void {
    this.userService.getSousFamille(this.routerService.snapshot.params.username).subscribe(
      data => {
        this.objs = data;
        this.objs.push("...");
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  valueOf: any;
  onSelect(a: any) {
    this.valueOf = a;
  }


  onclick(productName: any, peo: any) {
    let res = new DataResponse(this.valueOf, productName, peo);
    console.log(res);
    this.userService.getDataArticle(this.routerService.snapshot.params.username, res).subscribe(
      data => {
        this.dataSource = data;
        console.log("data", data);
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
