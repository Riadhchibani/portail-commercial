import { MatDialog } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { PasswordDialogComponent } from './password-dialog/password-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Utilisateur } from 'src/app/model/utilisateur';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Role } from 'src/app/model/Role';
import { MatSnackBar } from '@angular/material/snack-bar';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
interface Roles {
  value: string;
}
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog, private routerService: ActivatedRoute, private userService: UserService) { }
  @Input() usernameOutputVerify: string = '';

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  roles: Roles[] = [
    { value: 'User' },
    { value: 'Admin' }
  ];
  role = new Role();
  take(value: any) {
    this.role.roles = (value.target.value == 'Admin' || 'User' ? value.target.value : null);
  }
  matcher = new MyErrorStateMatcher();
  hide = true;
  testResult: boolean = false;
  dataSource: Utilisateur[] = [];
  dataTableUser: Utilisateur[] = [];
  localData: Utilisateur = new Utilisateur(0);

  displayedColumns: string[] = ['id', 'nom', 'prenom', 'email', 'age', 'date', 'tel', 'username', 'password', 'code', 'role', 'etat'];

  ngOnInit(): void {
    this.openDialog();
  }

  verifUsernamePwd(username: string, password: string) {
    this.userService.findbyNamepwd(username, password)
      .subscribe(
        data => {
          this.testResult = true;
        },
        (error: HttpErrorResponse) => {
          window.location.reload();
        }
      )
  }


  getUsersById(id: number) {
    this.userService.findById(id, this.routerService.snapshot.params.usernameAdmin).subscribe(
      data => {
        this.localData = data;
        this.dataTableUser.push(data);
      },
      (error: HttpErrorResponse) => {
        alert(error);
      }
    )
  }
  profileForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    Email: new FormControl(''),
    tel: new FormControl(''),
    date: new FormControl(''),
    code: new FormControl(''),
  });

  openDialog() {
    let resultDialog = this.dialog.open(PasswordDialogComponent);
    resultDialog.afterClosed().subscribe(
      result => {
        this.verifUsernamePwd(this.routerService.snapshot.params.usernameAdmin, result);
        let id = this.routerService.snapshot.params.userId;
        this.getUsersById(id);
      }
    )
  }

  roleUser = new Role(2, 'Client');

  onSubmit() {
    let user = new Utilisateur(
      this.routerService.snapshot.params.userId,
      (this.profileForm.value.nom == '' ? this.localData.nom : this.profileForm.value.nom),
      (this.profileForm.value.prenom == '' ? this.localData.prenom : this.profileForm.value.prenom),
      (this.profileForm.value.Email == '' ? this.localData.email : this.profileForm.value.Email),
      0,//edit 
      (this.profileForm.value.date == '' ? this.localData.date : this.profileForm.value.date),
      (this.profileForm.value.tel == '' ? this.localData.tel : this.profileForm.value.tel),
      (this.profileForm.value.username == '' ? this.localData.username : this.profileForm.value.username),
      (this.profileForm.value.password == '' ? this.localData.password : this.profileForm.value.password),
      (this.profileForm.value.code == '' ? this.localData.code : this.profileForm.value.code),
      this.roleUser
    );
    let timeDiff = Math.abs(Date.now() - new Date((user.date == null ? new Date() : user.date)).getTime());
    user.setAge(Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25));
    this.update(user);
  }


  update(user: Utilisateur) {
    this.userService.updateUser(user, this.routerService.snapshot.params.usernameAdmin)
      .subscribe(
        data => {
          this._snackBar.open("Supprimée",'',{
            duration: 1000
          });
        },
        (error: HttpErrorResponse) => {
          window.location.reload();
          this._snackBar.open("Il y a un problème",'',{
            duration: 1000
          });
        }
      )
  }

}
