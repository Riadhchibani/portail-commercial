import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LeftSideComponent,
    RightSideComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    BodyComponent
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
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
