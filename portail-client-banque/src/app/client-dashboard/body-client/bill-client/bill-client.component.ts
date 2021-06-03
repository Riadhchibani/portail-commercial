import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-client',
  templateUrl: './bill-client.component.html',
  styleUrls: ['./bill-client.component.css']
})
export class BillClientComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['id', 'facture', 'ficher'];
  dataSource: any[] = [''];

  ngOnInit(): void {
  }

}
