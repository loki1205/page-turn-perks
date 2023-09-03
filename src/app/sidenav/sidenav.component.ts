import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DrawerComponent, DrawerItem, DrawerSelectEvent } from '@progress/kendo-angular-layout';
import { SharedService } from '../shared.service';
interface Item {
  text: string;
  path: string;
  selected?: boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  @ViewChild('navExpanded', { static: false }) navExpanded!: ElementRef;
  totalCount = 0;
  currentCount = 0;
  constructor(private sharedService: SharedService) {
    this.sharedService.currentData$.subscribe((data) => {
      this.currentCount = data;
    });
    this.sharedService.totalData$.subscribe((data) => {
      this.totalCount = data;
    });
  }
  ngOnInit(){
    this.sharedService.currentData$.subscribe((data) => {
      this.currentCount = data;
    });
    this.sharedService.totalData$.subscribe((data) => {
      this.totalCount = data;
    });
  }
  expanded=false;
  toggleSidenav(){
    if(this.expanded)
    {
      this.navExpanded.nativeElement.style = "transform: translateX(-100%);"
      this.expanded=!this.expanded
    }
    else
    {
      this.navExpanded.nativeElement.style = "transform: translateX(0%);"
      this.expanded=!this.expanded
    }
  }

  linkClicked(event: any)
  {
    this.navExpanded.nativeElement.style = "transform: translateX(-100%);"
    this.expanded = false
  }
}
