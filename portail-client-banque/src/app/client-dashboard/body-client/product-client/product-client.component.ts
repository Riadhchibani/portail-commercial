import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataResponse } from 'src/app/model/DataResponse';
import { ImArticle } from './../../../model/ImFamilles';
import { UserService } from 'src/app/user.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-product-client',
  templateUrl: './product-client.component.html',
  styleUrls: ['./product-client.component.css']
})
export class ProductClientComponent implements OnInit {

  displayedColumns: string[] = ['id', 'libelle'];


  constructor(private routerService: ActivatedRoute, private userService: UserService) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

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
        this.dataSource = new MatTableDataSource<any>(data);
        this.dataSource.paginator = this.paginator;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
