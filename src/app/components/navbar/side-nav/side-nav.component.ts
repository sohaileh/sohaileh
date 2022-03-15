import { trigger } from '@angular/animations';
import { Component, OnInit, ViewChild, ViewChildren, ElementRef, ContentChildren } from '@angular/core';
import { Router } from '@angular/router';
// import { MatSidenav, MatMenuTrigger } from '@angular/material/trigger';
import { SidenavService } from '../services/sidenav.service';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @ViewChild('rightSidenav') public sidenav: any;
  @ViewChild("sidenavContainer") private parentRef: any
  @ViewChild('childCoProcessorRoutes') trigger: any;
  screenWidth: number = 0;
  dashBoardMessage: any;
  role: any
  parent: any
  toggleIconCss: string = 'fa fa-angle-right'
  reason = '';
  constructor(private router: Router, private sidenavService: SidenavService) {
    // this.dasboardSetting();
  }

  ngOnInit() {
    this.sidenavService.setSidenav(this.sidenav);
    console.log(this.sidenav, "sjhdjs")

    // const firstChild = parentElement.children[0];
    // const firstImage = parentElement.querySelector("img");
    this.role = localStorage.getItem('role');

    // this.screenWidth = window.innerWidth;
    // window.onresize = () => {
    //   // set screenWidth on screen size change
    //   this.screenWidth = window.innerWidth;
    // }
  }
  ngAfterViewInit() {
    //THIS SHOULD NOT BE EMPTY

    console.log(this.parentRef, "viewwww")
  }


  close(reason: string) {
    debugger
    this.reason = reason;
    this.sidenavService.close();
    // this.sidenav.close();
  }
  // dasboardSetting() {
  //   this.dashBoardMessage = this.router.url.replace('/', '').charAt(0).toUpperCase() + this.router.url.replace('/', '').slice(1)
  //   this.dashBoardMessage = this.dashBoardMessage.split('/')
  //   this.dashBoardMessage = this.dashBoardMessage[0];

  //   // set screenWidth on page load
  //   this.screenWidth = window.innerWidth;
  //   window.onresize = () => {
  //     // set screenWidth on screen size change
  //     this.screenWidth = window.innerWidth;
  //   }

  // }
  externalRoute() {
    window.location.href = "http://18.217.82.193:8000/Production/public/demo.html"
  }
  nestedLevelMenuIconChange() {
    return this.toggleIconCss = this.toggleIconCss === 'fa fa-angle-down' ? 'fa fa-angle-right' : 'fa fa-angle-down'
  }
  openMenu() {
    debugger
    this.trigger.openMenu()
  }
  // closeSubMenu(){

  // }
}
