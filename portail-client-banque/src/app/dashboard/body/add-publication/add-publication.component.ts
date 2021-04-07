import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.component.html',
  styleUrls: ['./add-publication.component.css']
})
export class AddPublicationComponent implements OnInit {
  
  value = '';

  constructor() { }

  ngOnInit(): void {
  }

}
