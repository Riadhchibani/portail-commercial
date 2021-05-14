import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ActivatedRoute } from '@angular/router';
import { Commande } from 'src/app/model/Commande';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-command-client',
  templateUrl: './command-client.component.html',
  styleUrls: ['./command-client.component.css']
})
export class CommandClientComponent implements OnInit {
  panelOpenState = false;
  dataSource: Commande[] = [];
  open: boolean = false;

  constructor(private userService: UserService, private routerService: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllReclamtions();
  }

  getAllReclamtions() {

    this.userService.getCommandesByUsername(this.routerService.snapshot.params.username).subscribe(
      data => {
        this.dataSource = data;
        if (this.dataSource.length == 1 || this.dataSource.length == 2) {
          this.open = true;
        }
      }, (error) => {
        alert(error.message);
      }
    )

  }


  change(event: MatSlideToggleChange, idClient: any) {
    this.userService.setAcceptionValue(idClient, event.checked, this.routerService.snapshot.params.username).subscribe(
      data => {
        alert("accepted");
      },
      (error) => {
        alert(error.message);
      })

  }
}
