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
        img: "/../assets/img/hotel-side1.jpg",
        name:"KING ROOM 01",
        price: "$50/NIGHT",
        kind: "SLEEPS 2"
      },
      {
        img: "/../assets/img/hotel-side1.jpg",
        name:"KING ROOM 01",
        price: "$50/NIGHT",
        kind: "SLEEPS 2"
      },
      {
        img: "/../assets/img/hotel-side1.jpg",
        name:"KING ROOM 01",
        price: "$50/NIGHT",
        kind: "SLEEPS 2"
      }
    ];
   

  }

}
