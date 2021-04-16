import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-password-dialog',
  templateUrl: './password-dialog.component.html',
  styleUrls: ['./password-dialog.component.css']
})
export class PasswordDialogComponent implements OnInit {

  hide = true;
  valPassword: string = '';

  constructor(private routerService: ActivatedRoute) { }

  ngOnInit(): void {

  }
  

}
