import { Component, OnInit, Input, ViewChild, TemplateRef, Inject, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavService } from '../services/sidenav.service';
// import { MaindashboardService } from 'src/app/maindashboard/services/maindashboard.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// import  moment  from 'moment';
@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {
  opened: boolean = false;
  toggleActive: boolean = false;
  loggedInUser: any = {};
  appName: string = ''
  is_checked: boolean = false;
  tooltipOptions = {
    'placement': 'top',
    'theme': 'light',
    'show-delay': 250
  }
  constructor(private router: Router, private sidenav: SidenavService) {
    if (this.router.url + "" == "/covid-measures-dashboard") {
      this.appName = "bTITON COVID-19 Measures"
    }
    else if (this.router.url + "" == "/main-dashboard") {
      this.appName = "Dashboard"
    }
    else if (this.router.url.includes("/co-processor-dashboard?line=")) {
      this.appName = "CO Processor"
    }
    else if (this.router.url + "" == "/coplan-listing-dashboard") {
      this.appName = "bTITON CO Listing"
    }
    else {
      this.appName = "bTITON Changeover App"
    }

  }

  ngOnInit() {
    this.loggedInUser['firstname'] = 'Super'.toUpperCase().charAt(0);
    this.loggedInUser['lastname'] = 'Admin'.toUpperCase().charAt(0);
    this.checkUrl()
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  toggleRightSidenav() {
    this.toggleActive = !this.toggleActive;
    this.sidenav.toggle();
  }
  openSearchModel() {
    // this.mainDashboardService.popup.next('open');
  }
  checkUrl() {
    // return this.is_checked = this.router.url != "/co-dashboard" ? true : false
  }

}


