import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Publication } from 'src/app/model/Publication';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-publication-client',
  templateUrl: './publication-client.component.html',
  styleUrls: ['./publication-client.component.css']
})
export class PublicationClientComponent implements OnInit {
  urlImage: any;


  constructor(private userService: UserService, private routerService: ActivatedRoute) { }
  dataSource: Publication[] = [];
  ngOnInit(): void {
    this.getpublicatioin();
    this.urlImage = `http://localhost:8083/files/`;
  }

  getpublicatioin() {
    this.userService.getAllPublicationForClient(this.routerService.snapshot.params.username).subscribe(
      data => {
        this.dataSource = data;
      }
    )
  }



}
