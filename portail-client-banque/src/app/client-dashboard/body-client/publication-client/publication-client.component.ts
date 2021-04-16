import { Component, OnInit } from '@angular/core';
import { Publication } from 'src/app/model/Publication';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-publication-client',
  templateUrl: './publication-client.component.html',
  styleUrls: ['./publication-client.component.css']
})
export class PublicationClientComponent implements OnInit {


  constructor(private userService: UserService) { }
  dataSource: Publication[] = [];
  ngOnInit(): void {
    this.getpublicatioin();
  }

  getpublicatioin() {
    this.userService.getAllPublication().subscribe(
      data => {
        console.log(data);
        this.dataSource = data;
      }
    )
  }
 


}
