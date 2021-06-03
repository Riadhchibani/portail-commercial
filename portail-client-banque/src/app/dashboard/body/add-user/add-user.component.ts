import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Utilisateur } from 'src/app/model/utilisateur';
import { UserService } from 'src/app/user.service';
import { Role } from 'src/app/model/Role';
import { ActivatedRoute } from '@angular/router';
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
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  hide = true;
  matcher = new MyErrorStateMatcher();

  constructor(private _snackBar: MatSnackBar, private userService: UserService, private routerService: ActivatedRoute) { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  roles: Roles[] = [
    { value: 'Client' },
    { value: 'Admin' }
  ];

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

  role = new Role();
  take(value: any) {
    this.role = (value.target.value == 'Admin' || 'Client' ? value.target.value : null);
  }

  addUser(user: Utilisateur) {
   this.userService.save(user,this.routerService.snapshot.params.username).subscribe(
      data => {
        this._snackBar.open("Ajoutée",'',{
          duration: 1000
        });
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }





  roleUser = new Role(2, 'Client');
  user = new Utilisateur(undefined,
    this.profileForm.value.nom,
    this.profileForm.value.prenom,
    this.profileForm.value.Email,
    0,//edit 
    new Date(),
    this.profileForm.value.tel,
    this.profileForm.value.username,
    this.profileForm.value.password,
    this.profileForm.value.code,
    this.roleUser);


  onSubmit() {
    let timeDiff = Math.abs(Date.now() - new Date((this.user.date == null ? new Date() : this.user.date)).getTime());
    this.user.setAge(Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25));
    this.addUser(this.user);
  }

}
