import { Component, OnInit } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';
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
        img: "/../assets/img/background-img.png",
        name:"Standard Room 01",
        price: "$50/night",
        kind: "sleeps 2",
        breakfast: "Breakfast"
      },
      {
        img: "/../assets/img/hotel-side1.jpg",
        name:"Standard Room 01",
        price: "$50/night",
        kind: "sleeps 2",
        breakfast: "Breakfast"
      },
      {
        img: "/../assets/img/hotel-side1.jpg",
        name:"Standard Room 01",
        price: "$50/night",
        kind: "sleeps 2",
        breakfast: "Breakfast"
      }
    ];
   

  }

}
