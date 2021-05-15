import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
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

  @Input() usernameAdminTable: string = '';

  displayedColumns: string[] = ['im_familles_id', 'libelle', 'im_sous_familles_id', 'sf_libelle', 'sf_im_familles_id', 'vendable', 'classe_ngp_libre', 'abr', 'imArticle'];


  constructor(private routerService: ActivatedRoute, private userService: UserService) { }


  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.userService.getData(this.routerService.snapshot.params.username).subscribe(
      data => {
        console.log(this.routerService.snapshot.params.username);
        //this.dataSource = data;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
