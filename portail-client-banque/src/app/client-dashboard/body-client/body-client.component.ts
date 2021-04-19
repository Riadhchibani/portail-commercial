import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-client',
  templateUrl: './body-client.component.html',
  styleUrls: ['./body-client.component.css']
})
export class BodyClientComponent implements OnInit {

  @Input() typeOfOutput: string = '';
  @Input() usernameAdmin: string = '';
  items = new Map([
    ['itemOfPublication', false],
    ['itemOfCommand', false],
    ['itemOfaddDemand', false],
    ['itemOfdemand', false],
    ['itemOfBill', false],
    ['itemOfReclamation', false],
    ['itemOfaddReclamation', false]
  ]
  );

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(event: any) {
    for (let item of this.items.keys()) {
      this.items.set(item, false);
      if (event.typeOfOutput.currentValue == item) {
        this.items.set(item, true);
      }
    }
  }
}
