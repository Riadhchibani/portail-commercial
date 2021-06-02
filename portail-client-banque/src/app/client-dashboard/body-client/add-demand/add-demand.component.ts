import { Utilisateur } from 'src/app/model/utilisateur';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Demande } from 'src/app/model/Demande';
import { UserService } from 'src/app/user.service';
import { DataResponse } from 'src/app/model/DataResponse';

@Component({
  selector: 'app-add-demand',
  templateUrl: './add-demand.component.html',
  styleUrls: ['./add-demand.component.css']
})
export class AddDemandComponent implements OnInit {
  dataSource: any;
  nomduPro: any | undefined;
  constructor(private routerService: ActivatedRoute, private userService: UserService) { }

  profileForm = new FormGroup({
    nomproduit: new FormControl(''),
    description: new FormControl(''),
  });

  testUser: boolean = false;
  userClient: Utilisateur | undefined;

  objs: any[] | undefined;
  valueOf: any;
  onSelect(a: any) {
    this.valueOf = a;
  }

  addDemand() {
    let demand = new Demande(
      undefined,
      new Date(),
      new Date(),
      "none",
      this.profileForm.value.description,
      this.nomduPro,
      this.userClient,
      undefined
    );
    if (this.testUser == false) {
      this.userService.addDemandClient(demand, this.routerService.snapshot.params.username).subscribe(
        date => {
          alert("Added");
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      )
    }

  }
  selectedValue: string | undefined;

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
        this.userClient = data;
      },
      (error: HttpErrorResponse) => {
        this.testUser = true;
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
  
  pickOb(a: any) {
    this.nomduPro = a;
  }

}
