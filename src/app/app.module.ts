import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SafetyDashboardComponent } from './components/safety-dashboard/safety-dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TopNavbarComponent } from './components/navbar/top-navbar/top-navbar.component';
import { SideNavComponent } from './components/navbar/side-nav/side-nav.component';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ChartModule } from 'angular-highcharts';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { PickdateDialogComponent } from './components/pickdate-dialog/pickdate-dialog.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SafetyDashboardComponent,
    TopNavbarComponent,
    SideNavComponent,
    PickdateDialogComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatExpansionModule,
    HttpClientModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    FormsModule,
    MatSelectModule,
    ChartModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
    AppRoutingModule,
  ],
  entryComponents: [PickdateDialogComponent],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
