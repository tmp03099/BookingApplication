import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelDetail } from '../interface/HotelDetail.interface';
import { DataService } from '../Service/dataService';

@Component({
  selector: 'app-searching-page',
  templateUrl: './searching-page.component.html',
  styleUrls: ['./searching-page.component.scss']
})
export class SearchingPageComponent implements OnInit {

  bookingDetail: HotelDetail[] = [];

  constructor(

    //inject ActivatedRoute and Router
    private route:ActivatedRoute, 
    private router: Router,
    private detailService: DataService

  ) { }

  async ngOnInit(): Promise<void> {

    this.bookingDetail = await this.detailService.getDetailProduct();

    this.bookingDetail[0].img = "/../assets/img/singleRoom.jpg"
    this.bookingDetail[1].img = "/../assets/img/deluxeRoom.jpg"
    this.bookingDetail[2].img = "/../assets/img/deluxeRoom2.jpg"
    this.bookingDetail[3].img = "/../assets/img/familyRoom.jpg"
    this.bookingDetail[4].img = "/../assets/img/familyRoom2.jpg"


    console.log(this.bookingDetail);

  }

  //if function return promise type need to add async to call function()
  async handlePageClicked(item: any){
    console.log(item);
    await this.router.navigate(['../detail'],{ 
      relativeTo: this.route,
      
      //set queryParams id to send info from searching component to detail component
      queryParams: {id: item.id }
    });

  }

}
