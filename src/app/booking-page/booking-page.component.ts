import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})
export class BookingPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  items: MenuItem[] = [];

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
