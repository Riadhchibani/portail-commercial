import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataResponse } from 'src/app/model/DataResponse';
import { ObjectResponseData } from 'src/app/model/ObjectResponseData';
import { UserService } from 'src/app/user.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();

  displayedColumns: string[] = ['id', 'libelle', 'date_Creation', 'prixVente', 'prixPublic'];



  @ViewChild(MatPaginator) paginator!: MatPaginator;

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
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  onclick(productName: any, peo: any) {
    let res = new DataResponse(this.valueOf, productName, peo);
    this.userService.getDataArticle(this.routerService.snapshot.params.username, res).subscribe(
      data => {//------------------------------------------------------------------------------------------
        this.dataSource = new MatTableDataSource<any>(data);
        this.dataSource.paginator = this.paginator;
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
