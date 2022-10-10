import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __values } from 'tslib';
import { DataService } from '../Service/dataService';

@Component({
  selector: 'app-detail-information',
  templateUrl: './detail-information.component.html',
  styleUrls: ['./detail-information.component.scss']
})
export class DetailInformationComponent implements OnInit {

  public id: String | null = null;

  detailInfo: any[] = [];

  storeValue: any;

  constructor(
    private route: ActivatedRoute,
    private detailService: DataService
  ) { }

  ngOnInit(): void {

    //get queryParam value from searching component
    this.route.queryParamMap.subscribe(async (param) => {
      this.id = param.get('id');

      this.detailInfo = await this.detailService.getDetailProduct();

      //(value)=>{}: inline function
      //function (value){}
      //forEach call inline function pass value(each element in list) to inline function
      this.detailInfo.forEach((value)=>{

        if(this.id == value.id){

          this.storeValue = value;
          
        }

      });

    });


    console.log(this.id);
  }



}
