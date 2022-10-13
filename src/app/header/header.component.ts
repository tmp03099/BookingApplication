import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { PhotoService } from '../Service/PhotoService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  items: MenuItem[] = [];

  adult: number = 2;

  child: number = 0;

  room: number = 1;

  rangeDate: Date[] | undefined;


  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){ }

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

  async handleSearchClicked(){
  
    await this.router.navigate(['booking'],{
      relativeTo: this.route,

      //set queryParams
      queryParams: {
        startDate: this.rangeDate[0].toLocaleDateString(),
        endDate: this.rangeDate[1].toLocaleDateString(),
        adult:this.adult, 
        child:this.child, 
        room:this.room 
      }
    });
      
    
  }

}
