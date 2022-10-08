import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BookingDetail } from '../interface/BookingDetail.interface';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})
export class BookingPageComponent implements OnInit {

  constructor() { }

  items: MenuItem[] = [];

  rangeDate: Date[] | undefined;

  bookingDetail: BookingDetail[] = [];
 

  ngOnInit(): void {

    this.items = [
      { label: 'Searching',
        routerLink: 'searching'
      },
      { label: 'Detail Information',
        routerLink: 'detail'
      },
      { label: 'Confirmation',
        routerLink: 'confirm'
      }
    ];

  }

 

}
