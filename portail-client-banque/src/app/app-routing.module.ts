import { AccesGuard } from './acces.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditUserComponent } from './dashboard/edit-user/edit-user.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { LoginComponent } from './login/login.component';




const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
  { path: 'dashboard/:username', component: DashboardComponent, canActivate: [AccesGuard]}, //data: { roles: 7 } 
  { path: 'editUser/user/:userId/admin/:usernameAdmin', component: EditUserComponent, canActivate: [AccesGuard] },
  { path: 'client/dashboard/:username', component: ClientDashboardComponent ,canActivate: [AccesGuard]},
  { path: 'NotFoundError', component: NotFoundComponent },
  { path: '**', redirectTo: 'NotFoundError' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
