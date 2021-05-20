import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  ngOnInit(): void {
    //this.getData();
  }
  
  onclick() {
    alert(this.profileForm.value.codea);
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
