import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataResponse } from 'src/app/model/DataResponse';
import { ObjectResponseData } from 'src/app/model/ObjectResponseData';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  dataSource: ObjectResponseData[] = [];

  displayedColumns: string[] = ['id', 'libelle', 'date_Creation', 'prixVente', 'prixPublic'];


  constructor(private routerService: ActivatedRoute, private userService: UserService) { }


  profileForm = new FormGroup({
    codea: new FormControl(''),
  });

  selectedValue: string | undefined;

  valueOf: any;
  onSelect(a: any) {
    this.valueOf = a;
  }
  objs: any[] | undefined;

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

  getData() {
    this.userService.getData(this.routerService.snapshot.params.username, 'ds').subscribe(
      data => {
        console.log(this.routerService.snapshot.params.username);
        //this.dataSource = data;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
