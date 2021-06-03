import { element } from 'protractor';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Utilisateur } from 'src/app/model/utilisateur';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Commande } from 'src/app/model/Commande';
import { UserService } from 'src/app/user.service';
import { DemandComponent } from '../demand.component';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-command-alert',
  templateUrl: './command-alert.component.html',
  styleUrls: ['./command-alert.component.css']
})
export class CommandAlertComponent implements OnInit {

  userAdmin = new Utilisateur();
  userCleint = new Utilisateur();
  testAcceptaion: boolean | undefined;
  commande = new Commande();
  commandeTest = new Commande();
  prix_res: number | undefined;
  desc_res: string | undefined;
  test = false;
  valPassword: string = '';

  constructor(private _snackBar: MatSnackBar, private routerService: ActivatedRoute, private userService: UserService, public dialogRef: MatDialogRef<DemandComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  profileForm = new FormGroup({
    prix: new FormControl(''),
    description: new FormControl(''),
  });





  ngOnInit(): void {

    this.userService.getCommandeByDemandeId(this.data.demande.id_demande, this.data.username).subscribe(
      data => {
        this.commandeTest = data;
        this.testAcceptaion = this.commandeTest.acceptation;
        this.test = true;
        this.prix_res = this.commandeTest.prix;
        this.desc_res = this.commandeTest.description;
      }, (error) => {
      }
    )
    this.userService.getUserbyUsername(this.data.username, this.data.username).subscribe(
      data => {
        this.userAdmin = data;
      }, (error) => {
        alert(error.message);
      }
    )
    this.userService.getUserbyUsername(this.data.Client, this.data.username).subscribe(
      data => {
        this.userCleint = data;
      }, (error) => {
        alert(error.message);
      }
    )
  }

  onSubmit() {

    let commande = new Commande(
      undefined,
      new Date(),
      this.profileForm.value.description,
      this.data.product,
      this.profileForm.value.prix,
      this.userAdmin,
      false,
      this.userCleint,
      this.data.demande
    )


    this.userService.addCommande(commande, this.data.username).subscribe(
      data => {
        this.commande = data;
        this._snackBar.open("Ajoutée",'',{
          duration: 1000
        });
      }, (error) => {
        alert(error.message);
      }
    )

  }
  deleteCommandByID() {

    this.userService.deleteCommand(this.commandeTest.id_commande, this.data.username).subscribe(
      data => {
        this._snackBar.open("supprimée",'',{
          duration: 1000
        });
      }, (err) => {
        alert(err);
      }
    );
  }


}
