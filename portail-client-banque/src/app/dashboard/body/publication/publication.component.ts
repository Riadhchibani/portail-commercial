import { Component, OnInit } from '@angular/core';
import { Publication } from 'src/app/model/Publication';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})



export class PublicationComponent implements OnInit {


  csvInputChange(fileInputEvent: any) {
    //console.log(fileInputEvent.target.files[0]);
  }
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getpublicatioin();
  }

  getpublicatioin() {
    this.userService.getAllPublication().subscribe(
      data => {
        this.dataSource = data;
      }
    )
  }
  dataSource: Publication[] = [];
 
}
