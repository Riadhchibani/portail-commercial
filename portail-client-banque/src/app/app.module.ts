import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LeftSideComponent } from './login/left-side/left-side.component';
import { RightSideComponent } from './login/right-side/right-side.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BodyComponent } from './dashboard/body/body.component';
import { ChartsModule } from 'ng2-charts';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { NavbarClientComponent } from './client-dashboard/navbar-client/navbar-client.component';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './dashboard/body/add-user/add-user.component';
import { PublicationComponent } from './dashboard/body/publication/publication.component';
import { AddPublicationComponent } from './dashboard/body/add-publication/add-publication.component';
import { BillComponent } from './dashboard/body/bill/bill.component';
import { AddBillComponent } from './dashboard/body/add-bill/add-bill.component';
import { ReclamationComponent } from './dashboard/body/reclamation/reclamation.component';
import { MatMenuModule } from '@angular/material/menu';
import { SidebarClientComponent } from './client-dashboard/sidebar-client/sidebar-client.component';
import { BodyClientComponent } from './client-dashboard/body-client/body-client.component';
import { ProduitComponent } from './dashboard/body/produit/produit.component';
import { EditUserComponent } from './dashboard/edit-user/edit-user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PasswordDialogComponent } from './dashboard/edit-user/password-dialog/password-dialog.component';
import { DemandComponent } from './dashboard/demand/demand.component';
import { AddDemandComponent } from './client-dashboard/body-client/add-demand/add-demand.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ClientTableComponent } from './dashboard/body/client-table/client-table.component';
import { ChartsComponent } from './dashboard/body/charts/charts.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { PublicationClientComponent } from './client-dashboard/body-client/publication-client/publication-client.component';
import { BillClientComponent } from './client-dashboard/body-client/bill-client/bill-client.component';
import { CommandClientComponent } from './client-dashboard/body-client/command-client/command-client.component';
import { DemandClientComponent } from './client-dashboard/body-client/demand-client/demand-client.component';
import { ReclamationClientComponent } from './client-dashboard/body-client/reclamation-client/reclamation-client.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { AddReclamationComponent } from './client-dashboard/body-client/add-reclamation/add-reclamation.component';
import { CommandAlertComponent } from './dashboard/demand/command-alert/command-alert.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LeftSideComponent,
    RightSideComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    BodyComponent,
    ClientDashboardComponent,
    NavbarClientComponent,
    AddUserComponent,
    PublicationComponent,
    AddPublicationComponent,
    BillComponent,
    AddBillComponent,
    ReclamationComponent,
    SidebarClientComponent,
    BodyClientComponent,
    ProduitComponent,
    EditUserComponent,
    NotFoundComponent,
    PasswordDialogComponent,
    DemandComponent,
    AddDemandComponent,
    ClientTableComponent,
    ChartsComponent,
    PublicationClientComponent,
    BillClientComponent,
    CommandClientComponent,
    DemandClientComponent,
    ReclamationClientComponent,
    AddReclamationComponent,
    CommandAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    ChartsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatDialogModule,
    ScrollingModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatStepperModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
