import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Utilisateur } from 'src/app/model/utilisateur';
import { UserService } from 'src/app/user.service';
import { DatePipe } from '@angular/common'


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

interface Role {
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

  constructor(private userService: UserService){}

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  roles: Role[] = [
    { value: 'User' },
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
  });

  role: string = '';
  take(value: any) {
    this.role = (value.target.value == 'Admin' || 'User' ? value.target.value : null);
  }

  addUser(user: Utilisateur) {
    this.userService.save(user).subscribe(
      data => {
        alert('Added');
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  onSubmit() {
    let user = new Utilisateur(
      undefined,
      this.profileForm.value.nom,
      this.profileForm.value.prenom,
      this.profileForm.value.Email,
      20,//edit 
      this.profileForm.value.date,
      this.profileForm.value.tel,
      this.profileForm.value.username,
      this.profileForm.value.password,
      this.role
    );
    this.addUser(user);
  }
}
