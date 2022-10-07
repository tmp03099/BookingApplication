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
      {label: 'Searching'},
      {label: 'Detail Information'},
      {label: 'Confirmation'}
    ];

    this.bookingDetail = [
      {
        img: "/../assets/img/singleRoom.jpg",
        name:"LAPALACE STANDARD ROOM",
        price: "$90/NIGHT",
        kind: "SLEEPS 2",
        bed: "QUEEN BED"
      },
      {
        img: "/../assets/img/deluxeRoom.jpg",
        name:"LAPALACE DELUXE ROOM",
        price: "$115/NIGHT",
        kind: "SLEEPS 2",
        bed: "QUEEN BED"
      },
      {
        img: "/../assets/img/deluxeRoom2.jpg",
        name:"LAPALACE DELUXE ROOM",
        price: "$125/NIGHT",
        kind: "SLEEPS 4",
        bed: "KING BED"
      },
      {
        img: "/../assets/img/familyRoom.jpg",
        name:"LAPALACE FAMILY ROOM",
        price: "$170/NIGHT",
        kind: "SLEEPS 4",
        bed: "KING BED"
      },
      {
        img: "/../assets/img/familyRoom2.jpg",
        name:"LAPALACE FAMILY ROOM",
        price: "$210/NIGHT",
        kind: "SLEEPS 6",
        bed: "QUEEN BED"
      }
    ];
   

  }

}
