import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  items: MenuItem[] = [];


  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: 'home'
    },
      {
        label:'Booking',
        icon: 'pi pi-check-circle',
        routerLink: 'booking'
      },
      {
        label:"List",
        icon: 'pi pi-list',
        routerLink: 'list'
      }
    ];

  }

}
